import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import Recommendation from "../../components/Recommendation/Recommendation";
// import "react-responsive-carousel/lib/styles/carousel.css";

export default function Results() {
  const { artist, id } = useParams();
  const [recommendations, setRecommendations] = useState(null);
  const [IFrameApiInstance, setIFrameApiInstance] = useState();
  const [gpt, setGpt] = useState(null);

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      setIFrameApiInstance(IFrameAPI);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/spotify/getRecommendation/${artist}/${id}`)
      .then((response) => {
        setRecommendations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!recommendations) {
      return;
    }
    axios
      .post(`http://localhost:8080/spotify/get-gpt/${artist}`, recommendations)
      .then((response) => {
        setGpt(response.data);
      });
  }, [recommendations, artist]);

  const handleSave = (recommendation, GPTExplanation, index) => {
    const updatedRecommendations = [...recommendations];
    updatedRecommendations[index].saved = true;
    setRecommendations(updatedRecommendations);
    const savedSong = {
      artist_id: `${recommendation.artist_id}`,
      artist_name: `${recommendation.artist_name}`,
      track_title: `${recommendation.track_title}`,
      artist_image: `${recommendation.artist_image}`,
      popularity: `${recommendation.popularity}`,
      artist_uri: `${recommendation.artist_uri}`,
      chatGPT: `${GPTExplanation}`,
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
      <section className="recommendations">
        {recommendations &&
          recommendations.map((recommendation, index) => {
            const GPTExplanation = gpt && gpt[recommendation.artist_uri];
            return (
              <Recommendation
                recommendation={recommendation}
                index={index}
                GPTExplanation={GPTExplanation}
                handleSave={handleSave}
                IFrameApiInstance={IFrameApiInstance}
              />
            );
          })}
      </section>
    </>
  );
}
