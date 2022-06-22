import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

const CharctersDetails = () => {
  const [choosenCharcter, setChoosenCharcter] = useState([]);
  const { id } = useParams();
  //pull the specific product details from the API
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api//character/${id}`)
      .then((res) => {
        setChoosenCharcter(res.data);
        // setIsLoading(false);
      });
  }, []);
  console.log(choosenCharcter);

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
          src={choosenCharcter.image}
          alt={choosenCharcter.name}
          height={300}
          width={300}
        />
        <h2>
          {choosenCharcter.name} <br />
          <small> Status: {choosenCharcter.status}</small>
        </h2>
        {/* </div> */}
        <div className="characterDetailsContainer">
          <div>
            <h3>General info</h3>
            <p>
              <strong>Species - </strong>
              {choosenCharcter.species}
            </p>

            <p>
              <strong>Gender - </strong>
              {choosenCharcter.gender}
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
            <p>{choosenCharcter.origin.name}</p>
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
