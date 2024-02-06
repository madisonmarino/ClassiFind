import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./MyFinds.scss";
import axios from "axios";
import Recommendation from "../../components/Recommendation/Recommendation";
import Footer from "../../components/Footer/Footer";

export default function MyFinds() {
  const [savedSongs, setSavedSongs] = useState([]);
  const [IFrameApiInstance, setIFrameApiInstance] = useState();

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      setIFrameApiInstance(IFrameAPI);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/1/saved")
      .then((response) => {
        setSavedSongs(response.data);
      })
      .catch((error) => {
        console.error(error);
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
        console.error("Error deleting song", error);
      });
  };

  return (
    <>
      <div className="myFinds">
        <Header color="black" />
        <h2 className="recommendations__header"> Saved finds</h2>
        <section className="recommendations">
          {savedSongs &&
            savedSongs.map((song, index) => {
              return (
                <Recommendation
                  recommendation={song}
                  index={index}
                  handleDelete={handleDelete}
                  IFrameApiInstance={IFrameApiInstance}
                />
              );
            })}
        </section>
      </div>
      <div
        className={
          savedSongs.length === 0 ? "footer__fixed" : "footer__dynamic"
        }
      >
        <Footer />
      </div>
    </>
  );
}
