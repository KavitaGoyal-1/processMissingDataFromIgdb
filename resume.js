const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");

// === Helper Functions ===
const title = (text) => new Paragraph({ text, heading: HeadingLevel.TITLE });

const heading = (text, level = HeadingLevel.HEADING_1) =>
  new Paragraph({ text, heading: level, spacing: { after: 200 } });

const boldText = (text) =>
  new Paragraph({ children: [new TextRun({ text, bold: true })] });

const paragraph = (text, bold = false) =>
  new Paragraph({ children: [new TextRun({ text, bold })] });

const bullet = (text) =>
  new Paragraph({ text, bullet: { level: 0 }, spacing: { after: 100 } });

// === Create Document ===
const doc = new Document({
  sections: [
    {
      children: [
        // Header
        title("KAVITA GOYAL"),
        paragraph(
          "📞 +91 98964 62970 | 📧 salonigoel3097@gmail.com | 📍 Mohali, India"
        ),
        paragraph("".padEnd(90, "_")),

        // Summary
        heading("Professional Summary"),
        paragraph(
          "MERN Stack Developer with 3.5+ years of experience in building full-stack, SEO-optimized web applications. Proficient in React.js, Node.js, Next.js, MongoDB, and PostgreSQL. Skilled in implementing scalable systems, performance optimization, and REST APIs. Note: UI/UX design was handled by dedicated designers."
        ),

        // Skills
        heading("Technical Skills"),
        paragraph("Frontend: React.js, Next.js, JavaScript (ES6+), Redux"),
        paragraph("Backend: Node.js, Express.js, Strapi (Headless CMS)"),
        paragraph("Databases: MongoDB, PostgreSQL (PSQL)"),
        paragraph("Other: RESTful APIs, Git, SEO Optimization"),
        paragraph("Tools: VS Code, Postman, Jira, Trello"),

        // Experience
        heading("Professional Experience"),
        boldText("Eminence Technologies, Mohali"),
        paragraph("MERN Stack Developer | Nov 2021 – Present"),
        bullet("Built scalable web applications using MERN and Next.js."),
        bullet("Integrated REST APIs, handled backend logic and routing."),
        bullet(
          "Mentored 2 junior developers; reviewed code and provided guidance."
        ),
        bullet("Focused on performance, SEO, and cross-browser compatibility."),

        // Projects
        heading("Key Projects"),

        boldText("TruGamer – Gaming Management Platform"),
        paragraph(
          "A web-based platform to manage gamers, events, and content. Designed for admin and user roles with SEO-friendly architecture."
        ),
        paragraph(
          "Tech Stack: Next.js, Strapi, PostgreSQL | Role: Full-stack Developer"
        ),
        bullet("Integrated Strapi backend and created custom APIs."),
        bullet(
          "Handled frontend rendering, SEO optimization, and performance."
        ),
        bullet(
          "Collaborated with design team to implement UI. (No design contribution)"
        ),
        bullet("URL: https://trugamer.com"),

        boldText("Backyard Club – Travel & Auction Platform"),
        paragraph(
          "Luxury travel and lifestyle platform with curated trips and real-time auctions."
        ),
        paragraph(
          "Tech Stack: Next.js, Node.js, Tailwind CSS | Role: Full-stack Developer"
        ),
        bullet(
          "Implemented multilingual support, server-side rendering, and SEO."
        ),
        bullet(
          "Built backend endpoints for real-time auction and checkout features."
        ),
        bullet(
          "Worked on API integration and frontend logic. (Design provided)"
        ),
        bullet("URL: https://dev.escanadevelopment.com"),

        boldText("Weyrk – Skill Verification & Job Matching Platform"),
        paragraph(
          "Dual-language (English & Arabic) job platform with skill classification and hiring features."
        ),
        paragraph(
          "Tech Stack: Next.js, Tailwind CSS | Role: Frontend Developer"
        ),
        bullet("Developed RTL-compatible UI with reusable components."),
        bullet(
          "Integrated dynamic data (profiles, QR codes, classifications)."
        ),
        bullet("Focused on accessibility and mobile responsiveness."),
        bullet("URL: https://weyrk.com"),

        boldText("Eroscort – Discreet Escort Booking Platform"),
        paragraph(
          "Privacy-focused escort booking site with secure, location-based listings."
        ),
        paragraph(
          "Tech Stack: React.js, Node.js, Tailwind CSS | Role: Full-stack Developer (Independent)"
        ),
        bullet("Built secure booking flows and backend routing."),
        bullet("Developed real-time availability system and filters."),
        bullet("Ensured data privacy, SEO, and fast load times."),
        bullet("URL: https://eroscort.com"),

        // Training
        heading("Training"),
        paragraph(
          "MERN Stack Developer Training – Tecnocodz, Mohali | May 2021 – Oct 2021"
        ),
        bullet("Completed full-stack MERN training with real-world projects."),
        bullet(
          "Built apps with MongoDB, Express, React, Node.js, and REST APIs."
        ),

        // Education
        heading("Education"),
        paragraph("MCA – Kurukshetra University | 2018 – 2021"),
        paragraph(
          "B.Com (Computer Applications) – Kurukshetra University | 2014 – 2017"
        ),
        paragraph("12th – HBSE | 2013 – 2014"),
        paragraph("10th – HBSE | 2011 – 2012"),

        // Strengths
        heading("Strengths"),
        bullet("Quick to adapt to new technologies and tools."),
        bullet("Disciplined, self-motivated, and organized."),
        bullet("Focused on performance, scalability, and clean code."),
        bullet("Strong communication and problem-solving skills."),

        // Personal Info
        heading("Personal Information"),
        paragraph("Date of Birth: 01 October 1997"),
        paragraph("Marital Status: Single"),
        paragraph("Languages Known: Hindi, English, Punjabi"),

        // Declaration
        heading("Declaration"),
        paragraph(
          "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief."
        ),
        paragraph("Place: Mohali"),
        paragraph("Date: 01 June 2025"),
        paragraph("Signature: Kavita Goyal"),
      ],
    },
  ],
});

// Save as DOCX
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("Kavita_Goyal_Resume3.docx", buffer);
  console.log("✅ Resume generated: Kavita_Goyal_Resume.docx");
});
