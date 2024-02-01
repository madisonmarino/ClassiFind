import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./MyFinds.scss";
import axios from "axios";

export default function MyFinds() {
  // use this use effect to get the users liked songs from the database
  // once have songs, map over and display
  const [savedSongs, setSavedSongs] = useState(null);
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

  return (
    <>
      <Header color="black" />
      <h1> WILL DISPLAY USERS SAVED SONGS HERE</h1>
      <div className="recommendations">
        {savedSongs &&
          savedSongs.map((song) => {
            return (
              <div className="recommendation" key={song.artist_id}>
                <div className="image">
                  <img
                    src={song.artist_image}
                    alt="composer"
                    className="recommendation__image"
                  />
                </div>
                <div className="recommendation__details">
                  <h3 className="recommendation__track">{song.track_name}</h3>
                  <h4>{song.artist_name}</h4>
                  <div>Popularity Score: {song.popularity}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
