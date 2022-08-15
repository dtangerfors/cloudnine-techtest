import List from "./pages/List";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
