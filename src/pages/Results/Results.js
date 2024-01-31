import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Results.scss";
import axios from "axios";

export default function Results() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/spotify/getRecommendation/${id}`)
      .then((response) => {
        setRecommendations(response.data);
      });
  }, [id]);
  return (
    <>
      <div>Harry Styles</div>
      {recommendations.map((recommendation) => {
        return;
      })}
    </>
  );
}
