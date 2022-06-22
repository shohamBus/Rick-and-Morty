import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Cards from "../components/Cards/Cards";
import Header from "../components/Header/Header";

const Home = () => {
  let [filterCharacter, setFilterCharacter] = useState([]);
  let [originalCharacter, setOriginalCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setFilterCharacter(res.data.results);
      setOriginalCharacter(res.data.results);
    });
  }, []);

  const inisialState = {
    name: " ",
    gender: "none",
    species: "none",
    status: "none",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "status":
        return { ...state, status: action.payload };
      case "gender":
        return { ...state, gender: action.payload };
      case "species":
        return { ...state, species: action.payload };
      case "reset":
        return inisialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, inisialState);
  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "name", payload: value });
  };
  const handleSelectChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const onFilterApply = () => {
    filterCharacter = originalCharacter.filter(
      (item) =>
        (item.name.toLowerCase().includes(state.name) ||
          item.name.toUpperCase().includes(state.name)) &&
        (item.status === state.status || state.status === "none") &&
        (item.gender === state.gender || state.gender === "none") &&
        (item.species === state.species || state.species === "none")
    );
    return setFilterCharacter(filterCharacter);
  };
  //reset cards
  const onFilterReset = () => {
    setFilterCharacter(originalCharacter);
    dispatch({ type: "reset" });
  };

  return (
    <>
      <Header
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        onFilterApply={onFilterApply}
        onFilterReset={onFilterReset}
        state={state}
      />
      <Cards filterCharacter={filterCharacter} />
    </>
  );
};

export default Home;
