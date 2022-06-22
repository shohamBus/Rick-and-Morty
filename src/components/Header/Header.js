import "./Header.css";
const Header = ({
  handleInputChange,
  state,
  handleSelectChange,
  onFilterApply,
  onFilterReset,
}) => {
  return (
    <div>
      <h1 className="head-line"> Rik And Morty</h1>;
      <div className="header">
        <div className="filters">
          <div className="filter">
            <label htmlFor="name">
              {" "}
              <h3>filter name:</h3>
            </label>
            <input
              id="name"
              type="text"
              placeholder="enter name or part of it"
              onChange={handleInputChange}
              value={state.name}
            />
          </div>
          <div className="filter">
            <label htmlFor="gender">
              {" "}
              <h3>filter by gender:</h3>
            </label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => {
                handleSelectChange(e);
              }}
              value={state.gender}
            >
              <option value="none">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="species">
              <h3>filter by species:</h3>
            </label>
            <select
              name="species"
              id="species"
              onChange={(e) => {
                handleSelectChange(e);
              }}
              value={state.species}
            >
              <option value="none">All</option>
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="status">
              {" "}
              <h3>filter by status:</h3>
            </label>
            <select
              name="status"
              onChange={(e) => {
                handleSelectChange(e);
              }}
              value={state.status}
              id="status"
            >
              <option value="none">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
        </div>
        <div className="buttons">
          <button className="button" onClick={() => onFilterApply()}>
            Apply
          </button>
          <button className="button" onClick={() => onFilterReset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
