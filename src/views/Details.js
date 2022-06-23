// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import Character from "../context/Character";

const CharctersDetails = () => {
  const { originalCharacter } = useContext(Character);
  let [choosenCharcter, setChoosenCharcter] = useState([]);
  const { id } = useParams();

  choosenCharcter = originalCharacter.filter(
    (character) => character.id === +id
  );
  // setChoosenCharcter(choosenCharcter);
  useEffect(() => {
    setChoosenCharcter(choosenCharcter);
  }, []);

  return (
    <div className="container">
      <div className="characterContainer">
        {/* <div className="characterHeader"> */}
        <img
          className="cover-img"
          src="https://picsum.photos/900/400"
          alt="cover"
        ></img>
        <img
          className="profilePicture"
          src={choosenCharcter[0].image}
          alt={choosenCharcter[0].name}
          height={300}
          width={300}
        />
        <h2>
          {choosenCharcter[0].name} <br />
          <small> Status: {choosenCharcter[0].status}</small>
        </h2>
        {/* </div> */}
        <div className="characterDetailsContainer">
          <div>
            <h3>General info</h3>
            <p>
              <strong>Species - </strong>
              {choosenCharcter[0].species}
            </p>

            <p>
              <strong>Gender - </strong>
              {choosenCharcter[0].gender}
            </p>
          </div>
          <div>
            <Link to={"/"}>
              {" "}
              <button className="btn">Back to menu</button>
            </Link>
          </div>
          {/* <div>
            <h3>Origin</h3>
            <p>{choosenCharcter[0].origin.name}</p>
            <a href={choosenCharcter.origin.url}>
            Go to {choosenCharcter.origin.name}
            </a>
          </div> */}
          {/* <div>
            <h3>Current location</h3>
            <p>{choosenCharcter.location.name}</p>
            <a href={choosenCharcter.location.url}>
            {console.log(choosenCharcter.location.name)}; Go to{" "}
            {choosenCharcter.location.name}
            </a>
            </div>
            
            </div>
            <div className="characterEpisodes">
            <h3>Episodes</h3>
            <div className="episodes">
            {choosenCharcter.episode.map((episode, i) => (
              <div key={episode}>
              <a href={episode}>Episode {i + 1}</a>
              </div>
              ))}
            </div> */}
        </div>
      </div>
    </div>
  );
};
export default CharctersDetails;
