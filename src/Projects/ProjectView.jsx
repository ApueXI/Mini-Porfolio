export default function ProjectView({ data, hide }) {
  const { title } = data.project;

  return (
    <div className="absolute md:top-[30vh] top-40  bg-[hsl(222,47%,21%)] m-7 p-10">
      <h1 className="font-bold text-3xl">{title}</h1>
      <img
        className="mt-10"
        src="public/Portfolio.png"
        alt="PlaceHolderForProjectsPortfolio"
      />
      <button
        className="absolute top-2 right-4 font-bold cursor-pointer"
        onClick={hide}
      >
        Hide
      </button>
    </div>
  );
}
