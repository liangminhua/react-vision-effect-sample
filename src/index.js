import React from "react";
import ReactDOM from "react-dom";
import Heart from "./Heart";
import MouseBalls from "./MouseBalls";
import TextParticle from "./TextParticle";
import CanvasNest from "./CanvasNest";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <div>
          <Link className="marginRight" to="/">
            Heart
          </Link>
          <Link className="marginRight" to="/canvasNest">
            CanvasNest
          </Link>

          <Link className="marginRight" to="/textParticle">
            TextParticle
          </Link>
          <Link to="/mouseBalls">MouseBalls</Link>
        </div>
        <Route exact path="/" render={() => <Heart text="I Love you" />} />
        <Route
          exact
          path="/canvasNest"
          render={() => <CanvasNest count={99} />}
        />
        <Route
          path="/textParticle"
          render={() => <TextParticle text="Hello World" />}
        />
        <Route
          path="/mouseBalls"
          render={() => <MouseBalls maxBalls={50} updateInterval={10} />}
        />
      </div>
    </Router>
  );
};

// <Heart text="I Love you" />
// <TextParticle text="Hello World" />
// <MouseBalls maxBalls={50} updateInterval={1} />
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
