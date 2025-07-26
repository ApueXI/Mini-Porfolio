export default function ProjectView({ data, hide }) {
  const { title, image } = data.project;

  return (
    <div className="absolute top-40 w-[clamp(23rem,70vw,80rem)] mt-[-5rem] bg-[hsl(222,47%,21%)] m-7 p-5">
      <h1 className="font-bold text-[clamp(1.3rem,2vw,2.5rem)]">{title}</h1>
      <div className="flex flex-col h-60 overflow-y-auto sm:flex-row sm:overflow-x-auto sm:h-full gap-1 p-0">
        {image.map((img, index) => (
          <img className="mt-2" src={img} alt={img} key={index} />
        ))}
      </div>
      <button
        className="absolute top-3 right-5 font-bold cursor-pointer bg-primary px-2 py-1 rounded-lg hover:scale-120 hover:bg-[hsl(243,75%,39%)] active:scale-120 active:bg-[hsl(243,75%,39%)] transition duration-300 ease-in-out"
        onClick={hide}
      >
        Hide
      </button>
    </div>
  );
}
