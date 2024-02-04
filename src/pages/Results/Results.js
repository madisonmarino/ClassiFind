import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import likeIcon from "../../assets/icons/likes.svg";
import { Bars } from "react-loader-spinner";

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
    if (IFrameApiInstance && recommendations) {
      console.log("recommendations", recommendations);
      recommendations.forEach((recommendation, index) => {
        const element = document.getElementById(`iframe-${index}`);
        const options = {
          width: "100%",
          height: "160",
          uri: recommendation.artist_uri,
        };
        const callback = (EmbedController) => {};
        IFrameApiInstance.createController(element, options, callback);
      });
    }
  }, [IFrameApiInstance, recommendations]);

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
  }, [recommendations]);

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
      chatGPT: `${recommendation.chatGPT}`,
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
                  </div>
                  <div
                    onClick={() => handleSave(recommendation, index)}
                    className="icon__space"
                  >
                    {!recommendation.saved ? (
                      <img src={likeIcon} alt="save icon" className="icon" />
                    ) : null}
                  </div>
                </div>
                <div id={`iframe-${index}`}></div>
                <div>
                  <h3 className="recommendation__chatGptIntro">
                    Why you might light this piece:
                  </h3>
                  <div className="recommendation__poweredBy">
                    Powered by chatGPT
                  </div>
                  <p className="recommendation__chatGptResponse">
                    <p className="recommendation__chatGptResponse">
                      {gpt ? (
                        <p className="recommendation__chatGptResponse">
                          {gpt[recommendation.artist_uri]}
                        </p>
                      ) : (
                        <p>
                          <Bars
                            height="80"
                            width="80"
                            color="#e2aba3"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                        </p>
                      )}
                    </p>
                  </p>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}