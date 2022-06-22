import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DetailCharcters } from "./context/DetailCharcters ";
import Home from "./views/Home";
import Details from "./views/Details";

function App() {
  return (
    <div>
      {/* <DetailCharcters.Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      {/* </DetailCharcters.Provider> */}
    </div>
  );
}
export default App;
