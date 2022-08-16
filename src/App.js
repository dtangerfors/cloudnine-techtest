import List from "./pages/List";
import SingleSalon from "./pages/SingleSalon"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:salonId" element={<SingleSalon />} />
      </Routes>
    </div>
  );
}

export default App;
