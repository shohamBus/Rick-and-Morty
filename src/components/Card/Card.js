import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ card, id }) => {
  return (
    <Link to={`/character/${id}`}>
      <div className="card">
        <img src={card.image} alt="" />
        <div className="card-info">
          <h3>name: {card.name}</h3>
          <h4>gender: {card.gender}</h4>
          <h4>species: {card.species}</h4>
          <h4>status: {card.status}</h4>
        </div>
      </div>
    </Link>
  );
};
export default Card;
