Absolutely 👍 — here’s the **complete README.md text** that you can copy-paste directly into your project:

---

# 🌐 Bhavesh's Portfolio + Me-API Playground

Welcome to my personal portfolio website! 🚀
This project showcases my skills, projects, and experiences as a **B.Tech IT (3rd Year)** student at **Manipal University Jaipur**.

It has been extended with a **Me-API Playground (Track A Assessment)** — a backend API that stores my profile data in a schema (`data.json`) and exposes it via REST endpoints.

---

## 📌 Features

### Portfolio

* 💼 About Me section
* 📂 Projects showcase
* 📞 Contact details
* 🎨 Clean & responsive design

### API Playground

* `GET /api/me/health` → health check
* `GET /api/me/profile` → my complete profile
* `GET /api/me/projects` → list of projects
* `GET /api/me/projects?skill=python` → filter projects by skill
* `GET /api/me/skills/top` → most-used skills across projects
* `GET /api/me/search?q=...` → search in profile/projects/work

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, Tailwind
* **Backend:** Vercel Serverless Functions (Node.js)
* **Database:** JSON file (`data.json`) with seeded profile, skills, and projects
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Live Demo

* Portfolio: [https://bhavesh-badhe.vercel.app/](https://bhavesh-badhe.vercel.app/)
* Example Endpoints:

  * [Health Check](https://bhavesh-badhe.vercel.app/api/me/health)
  * [Profile](https://bhavesh-badhe.vercel.app/api/me/profile)
  * [Projects (Python)](https://bhavesh-badhe.vercel.app/api/me/projects?skill=python)
  * [Top Skills](https://bhavesh-badhe.vercel.app/api/me/skills/top)
  * [Search "penetration"](https://bhavesh-badhe.vercel.app/api/me/search?q=penetration)

---

## 📂 Project Structure

```
.
├── index.html        # Portfolio frontend
├── data.json         # Profile data (acts as DB)
├── api/me.js         # Single serverless function for all endpoints
└── README.md         # Project documentation
```

---

## ⚡ Getting Started

### Run Locally

```bash
# Clone repository
git clone https://github.com/bhaveshbadhe/portfolio.git

# Navigate to project folder
cd portfolio

# Install Vercel CLI if not installed
npm i -g vercel

# Run locally
vercel dev
```

Access API at `http://localhost:3000/api/me/...`

### Deploy on Vercel

1. Push repo to GitHub.
2. Import repo in [Vercel](https://vercel.com).
3. Vercel automatically deploys both:

   * Portfolio at `/`
   * API endpoints at `/api/...`

---

## 🗄️ Schema (data.json)

The data is stored in a JSON schema:

* **profile**

  * `name`, `email`, `phone`
  * `education[]`
  * `skills[]`
  * `projects[]` (id, title, description, skills, links)
  * `work[]`
  * `certifications[]`
  * `links` (GitHub, LinkedIn, portfolio)

Example:

```json
{
  "profile": {
    "name": "Bhavesh Badhe",
    "email": "badhebhavesh0706@gmail.com",
    "skills": ["Python","SQL"],
    "projects": [{ "id":1,"title":"Face Recognition System" }]
  }
}
```

---

## 🧪 Sample Queries

```bash
curl https://bhavesh-badhe.vercel.app/api/me/health
curl https://bhavesh-badhe.vercel.app/api/me/profile
curl "https://bhavesh-badhe.vercel.app/api/me/projects?skill=python"
curl https://bhavesh-badhe.vercel.app/api/me/skills/top
curl "https://bhavesh-badhe.vercel.app/api/me/search?q=testing"
```

---

## 📄 Resume

[View Resume](https://drive.google.com/file/d/1C2QCXDRncuN3_gQ1IHhy-3NbbBTbP17k/view?usp=sharing)

---

## 📝 Known Limitations / Remarks

* Data is static (`data.json`), not a persistent DB.
* Only **GET** endpoints (no write ops).
* No authentication, pagination, or rate-limiting (could be added).
* Simple serverless API meant for assessment scope.

---

## ✅ Acceptance Criteria Check

* `GET /api/me/health` returns 200 ✔
* Queries return correct results (`projects?skill=...`, `/skills/top`, `/search?q=...`) ✔
* Profile data visible and seeded from resume ✔
* README complete (architecture, setup, schema, curl examples, resume) ✔
* Hosted on Vercel ✔

---

```

---
