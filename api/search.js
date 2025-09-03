import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const q = (req.query.q || "").toLowerCase();

  const results = {
    projects: data.profile.projects.filter(
      p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    ),
    skills: data.profile.skills.filter(s => s.toLowerCase().includes(q)),
    work: data.profile.work.filter(
      w =>
        w.company.toLowerCase().includes(q) ||
        w.role.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q)
    )
  };

  res.status(200).json(results);
}
