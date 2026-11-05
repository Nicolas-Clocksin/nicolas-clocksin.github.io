const skillGroups = [
  {
    category: "Frontend",
    color: "badge-info",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    color: "badge-secondary",
    skills: [
      "Ruby on Rails",
      "Express.js",
      "Python",
      "Java",
      "Ruby",
      "Node.js",
    ],
  },
  {
    category: "Databases",
    color: "badge-success",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    color: "badge-warning",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];

function Skills() {
  return (
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-base-content/60">
            {group.category}
          </h4>

          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className={`badge badge-soft ${group.color}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
