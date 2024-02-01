import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Quiz.scss";
import { useDebounce } from "use-debounce";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Quiz() {
  const [searchInput, setSearchInput] = useState(null);
  const [debouncedInput] = useDebounce(searchInput, 200);
  const [searchResponse, setSearchResponse] = useState([]);

  useEffect(() => {
    if (debouncedInput) {
      axios
        .get(`http://localhost:8080/spotify/search/${debouncedInput}`)
        .then((response) => {
          setSearchResponse(response.data);
        });
    } else {
      setSearchResponse([]);
      return;
    }
  }, [debouncedInput]);

  return (
    <>
      <Header color="black" />
      <h2 className="quiz__instruction">Select your favourite artist</h2>
      <input
        type="text"
        className="quiz__input"
        placeholder="Search for an artist"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* <button className="quiz__button">Submit</button> */}
      <div className="artists">
        {searchInput &&
          searchResponse.map((response) => {
            return (
              <Link
                to={`/quiz/results/${response.id}`}
                className="artist__link"
                key={response.id}
              >
                <div className="artist">
                  <img
                    src={response.image}
                    alt="artist headshot"
                    className="artist__headshot"
                  />
                  <h3 className="artist__name">{response.name}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
