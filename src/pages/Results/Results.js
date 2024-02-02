import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import likeIcon from "../../assets/icons/likes.svg";

export default function Results() {
  const { artist, id } = useParams();
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/spotify/getRecommendation/${artist}/${id}`)
      .then((response) => {
        console.log(response.data);
        setRecommendations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSave = (recommendation, index) => {
    const updatedRecommendations = [...recommendations];
    updatedRecommendations[index].saved = true;
    setRecommendations(updatedRecommendations);
    const savedSong = {
      artist_id: `${recommendation.artist_id}`,
      artist_name: `${recommendation.artist_name}`,
      track_title: `${recommendation.track_name}`,
      artist_image: `${recommendation.artist_image}`,
      popularity: `${recommendation.popularity}`,
      artist_uri: `${recommendation.artist_uri}`,
    };

    axios
      .post(`http://localhost:8080/users/1`, savedSong)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error adding song", error);
      });
  };

  return (
    <>
      <Header color="black" />
      <h2 className="recommendations__header">
        Your recommended classical music results
      </h2>
      <section className="recommendations">
        {recommendations &&
          recommendations.map((recommendation, index) => {
            return (
              <div className="recommendation" key={index}>
                <div className="recommendation__flex">
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
                    <div>
                      Song Popularity Score: {recommendation.popularity}
                    </div>
                  </div>
                  <div
                    onClick={() => handleSave(recommendation, index)}
                    className="saveIcon__space"
                  >
                    {!recommendation.saved ? (
                      <img
                        src={likeIcon}
                        alt="save icon"
                        className="saveIcon"
                      />
                    ) : null}
                  </div>
                </div>
                <h3 className="recommendation__chatGptIntro">
                  Why you might light this piece:
                </h3>
                <div className="recommendation__poweredBy">
                  Powered by chatGPT
                </div>
                <p className="new-line">{recommendation.chatGPT}</p>
              </div>
            );
          })}
      </section>
    </>
  );
}
