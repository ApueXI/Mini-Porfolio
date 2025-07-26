import ProjectCard from "./ProjectCard";

export default function Projects() {
  const datas = [
    {
      id: 1,
      title: "Recipe Manager",
      desc: "A website to store your recipes. With ingredients, instructions, immages",
      stack: "React | Tailwind | Flask",
      githubLink:
        "https://github.com/ApueXI/My-Mini-Projects/tree/main/Recipe%20Manager",
    },
    {
      id: 2,
      title: "Peronal Notes App",
      desc: "A website to store your personal notes. With a working backend to add and edit your notes",
      stack: "React",
      githubLink:
        "https://github.com/ApueXI/My-Mini-Projects/tree/main/Personal-Notes-App",
    },
    {
      id: 3,
      title: "Hobby Tracker",
      desc: "A website to keep track of your hobbies. With a backend to keep track on how many days you did your hobby",
      stack: "HTML | CSS | JS | Flask",
      githubLink:
        "https://github.com/ApueXI/My-Mini-Projects/tree/main/Hobby_Tracker",
    },
    {
      id: 4,
      title: "Quiz",
      stack: "HTML | CSS | JS |",
      desc: "Simple website that has a set of questions and a timer that has 4 answers block",
      githubLink: "https://github.com/ApueXI/My-Mini-Projects/tree/main/Quiz",
    },
  ];

  return (
    <div className="headers">
      <h1 className="bg-accent inline-block mb-5 px-2.5 py-1.5 font-bold rounded-xl text-[clamp(1.5rem,2vw,2rem)]">
        Projects
      </h1>
      <div className="cardContainer flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
        {datas.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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
