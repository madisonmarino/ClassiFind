import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import likeIcon from "../../assets/icons/likes.svg";

export default function Results() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/spotify/getRecommendation/${id}`)
      .then((response) => {
        setRecommendations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // function handleLike(recommendation) {
  //   console.log(recommendation);
  //   // use this function to save the song in the database
  // }

  return (
    <>
      <Header color="black" />
      <h2 className="recommendations__header">
        Your recommended classical music results
      </h2>
      <div className="recommendations">
        {recommendations &&
          recommendations.map((recommendation, index) => {
            return (
              <div className="recommendation" key={index}>
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
                <img
                  src={likeIcon}
                  alt="save icon"
                  className="recommendation__icon"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
