import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <div className="homepage__content">
        <Header color="white" />
        <h2 className="homepage__tagline">New journeys through old melodies</h2>
        <Link to="/quiz" className="homepage__link">
          <div className="homepage__button">Start</div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
