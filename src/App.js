import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import PopOverFile from "./Components/Home/PopOver/PopOverFile";
import WordAnimation from "./Components/Home/WordAnimation/WordAnimation";

function App() {
  return (
    <>
      <BrowserRouter>
        <PopOverFile />
        <Home />
      </BrowserRouter>
      {/* <WordAnimation /> */}
    </>
  );
}

export default App;
