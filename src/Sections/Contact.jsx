import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="headers">
      <h1 className="bg-accent inline-block mb-5 px-2.5 py-1.5 font-bold rounded-xl text-[clamp(1.5rem,2vw,2rem)]">
        Contact Me
      </h1>
      <div className="bg-primary font-bold overflow-x-auto whitespace-nowrap contactLink text-[clamp(1rem,1.15vw,3rem)] space-y-3">
        <p>
          <FontAwesomeIcon icon={faInbox} />
          Email: &nbsp;
          <a
            href="mailto:red26cabigan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            red26cabigan@gmail.com
          </a>
        </p>

        <p>
          <FontAwesomeIcon icon={faLinkedin} />
          Linkedin: &nbsp;
          <a
            href="https://www.linkedin.com/in/red-cabigan-755821367/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/red-cabigan-755821367/  &nbsp;
          </a>
        </p>

        <p>
          <FontAwesomeIcon icon={faGithub} />
          Github: &nbsp;
          <a
            href="https://github.com/ApueXI"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/ApueXI
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faFacebook} />
          Facebook: &nbsp;
          <a
            href="https://www.facebook.com/red.cabigan.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/red.cabigan.5
          </a>
        </p>
      </div>
    </div>
  );
}

// [ CONTACT SECTION ]
// ──────────────────────────────────────────────
// |  Let's Connect!                           |
// |                                            |
// |  Email: your@email.com                     |
// |  GitHub: github.com/yourname               |
// |  LinkedIn: linkedin.com/in/yourname        |
// |                                            |
// |  (Optional: Simple contact form)           |
// ──────────────────────────────────────────────
