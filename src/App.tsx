import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Metrics } from "./pages/Metrics";

function App() {
  return (
    <div className="App dark:bg-dark-mode dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
}

export default App;
