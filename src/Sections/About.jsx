export default function About() {
  return (
    <div className="headers text-text">
      <div className="bg-primary">
        <h1 className="text-[clamp(1.5rem,2vw,2.5rem)] font-bold">About Me</h1>
        <ul className="list-inside list-disc font-medium text-[clamp(1rem,1.5vw,1.5rem)]">
          <li>Currently Learning React and Tailwing</li>
          <li>Interested in learning ASP.NET CORE</li>
          <li>
            I build small projects in order to famillirize myself with the
            skills i learn
          </li>
        </ul>
      </div>
      <div className="bg-accent font-bold text-[clamp(1rem,1.5vw,1.5rem)]">
        <h1>
          Skills: React | Tailwind | Flask | Python | Javascript | HTML | CSS |
          Git
        </h1>
      </div>
    </div>
  );
}

// [ ABOUT SECTION ]
// ──────────────────────────────────────────────
// |  About Me                                 |
// |  - Currently learning React & Tailwind    |
// |  - Interested in UI design & APIs         |
// |  - Building small projects to grow skills |
// |                                            |
// |  Skills: React | JavaScript | HTML | CSS   |
// ──────────────────────────────────────────────
