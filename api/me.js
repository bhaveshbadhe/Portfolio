import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const profile = data.profile;
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Health check
  if (url.pathname === "/api/me/health" && req.method === "GET") {
    return res.status(200).json({ status: "ok" });
  }

  // GET profile
  if (url.pathname === "/api/me/profile" && req.method === "GET") {
    return res.status(200).json(profile);
  }

  // GET projects (+ optional ?skill=foobar)
  if (url.pathname === "/api/me/projects" && req.method === "GET") {
    const skill = url.searchParams.get("skill");
    const projects = profile.projects.filter(p =>
      !skill || p.skills.map(s => s.toLowerCase()).includes(skill.toLowerCase())
    );
    return res.status(200).json(projects);
  }

  // GET top skills
  if (url.pathname === "/api/me/skills/top" && req.method === "GET") {
    const counts = {};
    profile.projects.forEach(p => {
      p.skills.forEach(s => (counts[s] = (counts[s] || 0) + 1));
    });
    const topSkills = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([skill, count]) => ({ skill, count }));
    return res.status(200).json(topSkills);
  }

  // GET search?q=...
  if (url.pathname === "/api/me/search" && req.method === "GET") {
    const q = url.searchParams.get("q")?.toLowerCase() || "";
    const results = {
      projects: profile.projects.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      ),
      skills: profile.skills.filter(s => s.toLowerCase().includes(q)),
      work: profile.work.filter(w =>
        w.company.toLowerCase().includes(q) ||
        w.role.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q)
      )
    };
    return res.status(200).json(results);
  }

  // 404 fallback
  return res.status(404).json({ error: "Not found" });
}
