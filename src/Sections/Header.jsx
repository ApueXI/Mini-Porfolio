import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="headers">
      {/* Name Section */}
      <div className="bg-primary sm:inline-block font-bold text-[clamp(1.3rem,3vw,2rem)]">
        <h1>Red Cabigan</h1>
        <h1>Aspiring Web Developer</h1>
      </div>

      {/* Intro Seciton */}
      <div className="bg-primary-light">
        <h1 className="text-justify text-[clamp(1rem,2vw,1.8rem)] font-bold ">
          An incoming second year Information Techonology student with a growing
          focus on React and modern web development.
        </h1>
      </div>

      {/* Contact Seciton */}
      <div className="font-bold text-[clamp(1.5rem,2vw,2.5rem)] sm:text-left text-center sm:space-x-10 space-x-5 linkHead ">
        <a
          href="https://github.com/ApueXI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/red-cabigan-755821367/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          Linkedin
        </a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// [ HEADER / HERO SECTION ]
// ──────────────────────────────────────────────
// |  [ Your Name ]                            |
// |  Aspiring Web Developer | React Learner   |
// |                                            |
// |  Short intro:                             |
// |  "Hi! I'm [Your Name], a 2nd-year CS       |
// |  student learning React & modern web dev."|
// |                                            |
// |  [ GitHub ] [ LinkedIn ] [ Email ]         |
// |  ↓ Scroll Down                            |
// ──────────────────────────────────────────────

// <a
//   href="https://www.facebook.com/red.cabigan.5"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FontAwesomeIcon icon={faFacebook} />
//   Facebook
// </a>

// <a
//   href="mailto:red26cabigan@gmail.com"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <FontAwesomeIcon icon={faInbox} />
//   Email Me
// </a>
