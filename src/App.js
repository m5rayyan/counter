import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter num="13" />
      <Counter num="3" />
      <Counter num="22" />
      <Counter num="4" />
    </div>
  );
}

export default App;
