import Header from "../../components/Header/Header";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <div className="homepage__content">
        <Header />
        <h2 className="homepage__tagline">New journeys through old melodies</h2>
        <div className="homepage__button">Start</div>
      </div>
    </>
  );
}
