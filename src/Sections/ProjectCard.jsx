export default function ProjectCard({ project }) {
  const { id, title, desc, stack, githubLink } = project;

  const viewScreenshot = () => {
    alert(`The Screenshot button`);
  };
  return (
    <div className="cardContainer relative flex flex-col space-y-2 bg-primary-light p-4 rounded-lg w-80 h-70">
      <h1>{title}</h1>
      <h1>Stacks used: {stack}</h1>
      <p>{desc}</p>
      <div className="cardContainer mt-auto space-x-3 mx-auto font-bold ">
        <a href={githubLink} className="hover:scale-110 inline-block">
          Github Repo
        </a>
        <button onClick={viewScreenshot} className="hover:scale-110">
          View Screenshots
        </button>
      </div>
    </div>
  );
}

// [ PROJECTS SECTION ]
// ──────────────────────────────────────────────
// |  My Projects                              |
// |                                            |
// |  [ Weather App ]   [ To-Do App ]           |
// |  🌤️ Simple API call | ✅ CRUD with React   |
// |  [ Live Demo ] [ GitHub Repo ]             |
// |                                            |
// |  [ Calculator App ]                        |
// |  🧮 Basic React logic + styling            |
// |  [ Live Demo ] [ GitHub Repo ]             |
// |                                            |
// |  (Optional: Add screenshots for each)      |
// ──────────────────────────────────────────────
