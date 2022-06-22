import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ filterCharacter }) => {
  return (
    <div className="cards">
      {filterCharacter.map((card) => (
        <Card key={card.id} id={card.id} card={card} />
      ))}
    </div>
  );
};
export default Cards;
