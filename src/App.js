import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./context/Character";
import Home from "./views/Home";
import Details from "./views/Details";
import { useState } from "react";

function App() {
  const [originalCharacter, setOriginalCharacter] = useState([]);
  return (
    <div>
      <Character.Provider value={{ originalCharacter, setOriginalCharacter }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Character.Provider>
    </div>
  );
}
export default App;
