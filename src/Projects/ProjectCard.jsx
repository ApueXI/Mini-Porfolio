export default function ProjectCard({ project, onView }) {
  return (
    <div className="cardContainer flex flex-col space-y-2 bg-primary-light p-4 rounded-lg w-[clamp(300px,50vw,450px)] h-[clamp(100px,40vh,300px)]">
      <h1 className="bg-bg-secondary font-bold mx-auto mt-[-5px] px-3 py-2 rounded-lg">
        {project.title}
      </h1>
      <p className="bg-primary px-2 py-3 text-justify font-medium rounded-lg h-full">
        {project.desc}
      </p>
      <h1 className="font-light">
        Stacks used: <span className="font-black"> {project.stack}</span>
      </h1>
      <div className="cardContainer bg-[hsl(217,33%,27%)] px-3 py-1 rounded-lg text-center space-x-3 mx-auto font-bold">
        <a
          href={project.githubLink}
          className="hover:scale-110 active:scale-110 inline-block transition duration-300 ease-in-out"
        >
          Github Repo
        </a>
        <button
          onClick={onView}
          className="text-white cursor-pointer hover:scale-110 active:scale-110 inline-block transition duration-300 ease-in-out"
        >
          View Screeenshoots
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
