import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MouseBalls from "./MouseBalls";
import TextParticle from "./TextParticle";
import Heart from "./Heart";
import CanvasNest from "./CanvasNest";

class MixIn extends Component {
  render() {
    return (
      <MouseBalls maxBalls={50} updateInterval={10}>
        <div style={{ marginTop: 100 }}>
          <Heart text="刘雨" />
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: -1
          }}
        >
          <TextParticle text="儿童节快乐" fps="24" />
        </div>
        <CanvasNest />
      </MouseBalls>
    );
  }
}

export default MixIn;
