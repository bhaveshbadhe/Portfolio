import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const { skill } = req.query;

  let projects = data.profile.projects;
  if (skill) {
    projects = projects.filter(p =>
      p.skills.map(s => s.toLowerCase()).includes(skill.toLowerCase())
    );
  }
  res.status(200).json(projects);
}
