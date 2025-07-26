import { useState } from "react";
import ProjectCard from "../Projects/ProjectCard";
import ProjectView from "../Projects/ProjectView";

export default function Projects() {
  const [activateProject, setActivateProject] = useState(null);
  const datas = [
    {
      id: 1,
      title: "Recipe Manager",
      desc: "A website to store your recipes. With ingredients, instructions, immages",
      stack: "React | Tailwind | Flask",
      image: [
        "/RecipeManager1.png",
        "/RecipeManager2.png",
        "/RecipeManager3.png",
        "/RecipeManager4.png",
        "/RecipeManager5.png",
        "/RecipeManager6.png",
      ],
      githubLink:
        "https://github.com/ApueXI/My-Mini-Projects/tree/main/Recipe%20Manager",
    },
    {
      id: 2,
      title: "Peronal Notes App",
      desc: "A website to store your personal notes. With a working backend to add and edit your notes",
      stack: "React",
      image: [
        "/PersonalNotes1.png",
        "/PersonalNotes2.png",
        "/PersonalNotes3.png",
        "/PersonalNotes4.png",
      ],
      githubLink:
        "https://github.com/ApueXI/My-Mini-Projects/tree/main/Personal-Notes-App",
    },
    {
      id: 3,
      title: "Hobby Tracker",
      desc: "A website to keep track of your hobbies. With a backend to keep track on how many days you did your hobby",
      stack: "HTML | CSS | JS | Flask",
      image: [
        "/HobbyTracker1.png",
        "/HobbyTracker2.png",
        "/HobbyTracker3.png",
        "/HobbyTracker4.png",
        "/HobbyTracker5.png",
        "/HobbyTracker6.png",
      ],
      githubLink:
        "https://github.com/ApueXI/My-Mini-Projects/tree/main/Hobby_Tracker",
    },
    {
      id: 4,
      title: "Quiz",
      stack: "HTML | CSS | JS |",
      image: ["/Quiz1.png", "/Quiz2.png", "/Quiz3.png"],
      desc: "Simple website that has a set of questions and a timer that has 4 answers block",
      githubLink: "https://github.com/ApueXI/My-Mini-Projects/tree/main/Quiz",
    },
  ];

  const handleOpen = (data) => setActivateProject(data);
  const handleClose = () => setActivateProject(null);

  return (
    <div className="headers relative flex flex-col items-center">
      <div className="m-0 w-full">
        <h1 className="bg-accent inline-block px-2.5 py-1.5 font-bold rounded-xl text-[clamp(1.5rem,2vw,2rem)]">
          Projects
        </h1>
      </div>

      <div className="cardContainer h-90 overflow-y-auto md:h-[inherit] py-7 flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
        {datas.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onView={() => handleOpen(project)}
          />
        ))}
      </div>

      {activateProject && (
        <ProjectView data={{ project: activateProject }} hide={handleClose} />
      )}
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
