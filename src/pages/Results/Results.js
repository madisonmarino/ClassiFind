import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";
import Header from "../../components/Header/Header";

export default function Results() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/spotify/getRecommendation/${id}`)
      .then((response) => {
        setRecommendations(response.data);
        console.log(recommendations);
      });
  }, [id]);
  return (
    <>
      <Header color="black" />
      <h2 className="results__header">
        Your recommended classical music results
      </h2>
      <div className="recommendations">
        {recommendations.map((recommendation) => {
          return (
            <div className="recommendation" key={recommendation.artist_id}>
              <div className="image">
                <img
                  src={recommendation.artist_image}
                  alt="composer"
                  className="recommendation__image"
                />
              </div>
              <div className="recommendation__details">
                <h3 className="recommendation__track">
                  {recommendation.track_name}
                </h3>
                <h4>{recommendation.artist_name}</h4>
                <div>Popularity Score: {recommendation.popularity}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
