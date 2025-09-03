import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const counts = {};
  data.profile.projects.forEach(p => {
    p.skills.forEach(s => {
      counts[s] = (counts[s] || 0) + 1;
    });
  });

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([skill, count]) => ({ skill, count }));

  res.status(200).json(sorted);
}
