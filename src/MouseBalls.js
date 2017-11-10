/**
 * inspired by https://codepen.io/renatorib/pen/gBLDA
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MouseBalls.css";

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
function generateBall({ x, y }) {
  var range = 15;
  var sizeInt = getRandomInt(10, 30);
  return {
    className: "ball",
    style: {
      background: `rgb(${getRandomInt(0, 255)},${getRandomInt(
        0,
        255
      )},${getRandomInt(0, 255)})`,
      height: sizeInt,
      width: sizeInt,
      left: getRandomInt(x - range - sizeInt, x + range),
      top: getRandomInt(y - range - sizeInt, y + range)
    }
  };
}
class MouseBalls extends Component {
  state = {
    mousePos: {
      x: -1,
      y: -1
    },
    balls: []
  };
  componentDidMount() {
    const { maxBall = 20, updateInterval = 1 } = this.props;
    let id = setInterval(() => {
      if (this.state.mousePos.x > 0 && this.state.mousePos.y > 0) {
        if (this.state.balls.length < maxBall) {
          let tmp = this.state.balls.slice();
          tmp.push(generateBall(this.state.mousePos));
          this.setState({
            balls: tmp
          });
        } else {
          clearInterval(id);
        }
      }
    }, 1);
    let index = 0;
    setInterval(() => {
      if (this.state.mousePos.x > 0 && this.state.mousePos.y > 0) {
        this.updateBall(index % maxBall);
        ++index;
      } else {
        this.setState({
          balls: []
        });
      }
    }, updateInterval);
  }
  onMouseMove = e => {
    this.setState({
      mousePos: {
        x: e.pageX,
        y: e.pageY
      }
    });
  };
  onMouseLeave = e => {
    this.setState({
      mousePos: {
        x: -1,
        y: -1
      }
    });
  };
  updateBall = index => {
    let tmp = this.state.balls.slice();
    tmp[index] = null;
    this.setState(
      {
        balls: tmp
      },
      () => {
        let tmp = this.state.balls.slice();
        tmp[index] = generateBall(this.state.mousePos);
        this.setState({
          balls: tmp
        });
      }
    );
  };
  render() {
    return (
      <div
        id="wrap"
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        {this.state.balls.map((item, index) => {
          if (item) {
            return (
              <div className={item.className} key={index} style={item.style} />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

MouseBalls.propTypes = {
  maxBall: PropTypes.number,
  updateInterval: PropTypes.number
};
export default MouseBalls;
