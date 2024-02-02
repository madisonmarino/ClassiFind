import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./MyFinds.scss";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete.svg";

export default function MyFinds() {
  const [savedSongs, setSavedSongs] = useState([]);
  // CHANGE THE USER DYNAMICALLY USE PARAMS WHEN LOGGED IN
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/1/saved")
      .then((response) => {
        setSavedSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [savedSongs]);

  const handleDelete = (song, index) => {
    const updatedSavedSongs = [...savedSongs];
    savedSongs[index].saved = true;
    setSavedSongs(updatedSavedSongs);

    axios
      .delete(`http://localhost:8080/users/1/song/${song.id}`)
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
      <h1> WILL DISPLAY USERS SAVED SONGS HERE</h1>
      <section className="recommendations">
        {savedSongs &&
          savedSongs.map((song, index) => {
            return (
              <div className="recommendation">
                <div className="recommendation__flex" key={index}>
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
