import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Card from "./component/game/card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
