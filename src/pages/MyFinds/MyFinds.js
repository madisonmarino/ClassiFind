import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./MyFinds.scss";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete.svg";

export default function MyFinds() {
  const [savedSongs, setSavedSongs] = useState([]);
  const [IFrameApiInstance, setIFrameApiInstance] = useState();

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      setIFrameApiInstance(IFrameAPI);
    };
  }, []);

  useEffect(() => {
    if (IFrameApiInstance && savedSongs) {
      savedSongs.forEach((song) => {
        const element = document.getElementById(`iframe-${song.id}`);
        const options = {
          width: "100%",
          height: "160",
          uri: song.artist_uri,
        };
        const callback = (EmbedController) => {};
        IFrameApiInstance.createController(element, options, callback);
      });
    }
  }, [IFrameApiInstance, savedSongs]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/1/saved")
      .then((response) => {
        setSavedSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (song) => {
    axios
      .delete(`http://localhost:8080/users/1/song/${song.id}`)
      .then((response) => {
        console.log(response.data);
        setSavedSongs(response.data);
      })
      .catch((error) => {
        console.error("Error adding song", error);
      });
  };

  return (
    <>
      <Header color="black" />
      <h1> WILL DISPLAY USERS SAVED SONGS HERE</h1>
      <section className="recommendations">
        {savedSongs &&
          savedSongs.map((song, index) => {
            return (
              <div className="recommendation" key={index}>
                <div className="recommendation__flex">
                  <div className="image">
                    <img
                      src={song.artist_image}
                      alt="composer"
                      className="recommendation__image"
                    />
                  </div>
                  <div className="recommendation__details">
                    <h3 className="recommendation__track">
                      {song.track_title}
                    </h3>
                    <h4 className="recommendation__artist">
                      {song.artist_name}
                    </h4>
                  </div>
                  <div
                    onClick={() => handleDelete(song, index)}
                    className="icon__space"
                  >
                    {!song.saved ? (
                      <img src={deleteIcon} alt="save icon" className="icon" />
                    ) : null}
                  </div>
                </div>
                <div id={`iframe-${song.id}`}></div>
                <div>
                  <h3 className="recommendation__chatGptIntro">
                    Why you might light this piece:
                  </h3>
                  <div className="recommendation__poweredBy">
                    Powered by chatGPT
                  </div>
                  <p className="recommendation__chatGptResponse">
                    {song.chatGPT}
                  </p>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}