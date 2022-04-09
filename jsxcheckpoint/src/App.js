import logo from "./logo.svg";
import "./App.css";
import imageInSrc from "./imageInSrc.jpeg";
import styles from "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">OKPE NNANNA ORJI</h1>
        <br />
        <img src={imageInSrc} alt="flames" />
        <br />
        <img src="../imageInPublic.jpeg" alt="design" />
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
