export default function Skills() {
  const skills = [
    {
      category: "Programmiersprachen",
      items: ["JavaScript/TypeScript", "Python", "Java", "HTML/CSS"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "TailwindCSS"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "VS Code", "Docker", "AWS"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Meine Fähigkeiten</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {skillGroup.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}