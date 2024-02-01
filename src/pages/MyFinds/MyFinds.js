import { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./MyFinds.scss";
import axios from "axios";

export default function MyFinds() {
  // use this use effect to get the users liked songs from the database
  // once have songs, map over and display

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header color="black" />
      <h1> WILL DISPLAY USERS SAVED SONGS HERE</h1>
    </>
  );
}
