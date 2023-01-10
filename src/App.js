import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>Södermalm's School of Ergonomics</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element />
        <Route path="" element />
      </Routes>
    </div>
  );
}

export default App;
