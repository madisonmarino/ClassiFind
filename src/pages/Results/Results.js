import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";
import Header from "../../components/Header/Header";

export default function Results() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:8080/spotify/getRecommendation/${id}`)
  //       .then((response) => {
  //         setRecommendations(response.data);
  //         console.log(recommendations);
  //       });
  //   }, [id]);

  let recommendation = {
    artist_name: "hi",
    artist_id: "1",
    artist_image: "boat",
  };

  function handleLike(recommendation) {
    console.log(recommendation);
    // use this function to save the song in the database
  }

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
      <div className="recommendation">
        <div className="image">
          <img
            src="data:image/jpeg;base64,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"
            alt="composer"
            className="recommendation__image"
          />
        </div>
        <div className="recommendation__details">
          <h3 className="recommendation__track">
            SAosicnsdvdsvosdvnso dnovds dvifvfdo vd oc orfodsd fidsjfds
          </h3>
          <h4>Hary Styles</h4>
          <div>Popularity Score: 92</div>
        </div>
      </div>
    </>
  );
}
