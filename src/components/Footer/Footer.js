import "./Footer.scss";
import gitHubLogo from "../../assets/icons/github.png";
import emailIcon from "../../assets/icons/email.svg";
import linkedInLogo from "../../assets/icons/linkedIn.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__container">
          <div className="footer__signOff">
            <div>
              <h4 className="footer__tagline">Let's Chat!</h4>
              <p>Ready to turn your ideas into reality?</p>
              <p>
                Reach out and let's work together to create something amazing!
              </p>
            </div>
            <a
              className="footer__button"
              title="email link"
              href="mailto:marinomadison@gmail.com"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <section className="footer__end">
        <h4 className="footer__site">ClassiFind</h4>
        <div className="links">
          <a title="email link" href="mailto:madison@email.com">
            <img className="footer__icons" src={emailIcon} alt="email icon" />
          </a>
          <a
            title="link to github"
            href="https://github.com/madisonmarino"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubLogo} alt="github logo" className="footer__icons" />
          </a>
          <a
            title="link to linkedIn"
            href="https://www.linkedin.com/in/-madison-marino/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedInLogo}
              alt="linkedIn logo"
              className="footer__icons"
            />
          </a>
        </div>
        <h4 className="footer__name">Madison Marino</h4>
      </section>
    </footer>
  );
}
