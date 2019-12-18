import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Transition, animated } from "react-spring/renderprops";

class RandomPassword extends Component {
  state = {
    randomList: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    randomPassword: "",
    showCopied: false,
    addSpec: false,
    value: 8
  };

  generateNewPassword = () => {
    var specialCharArr = [
      "!",
      "#",
      "$",
      "&",
      "?",
      "%",
      "^",
      "@",
      ":",
      "/",
      ">",
      "-",
      "_",
      "*"
    ];
    var newArray = [];
    var randSpecValue =
      specialCharArr[Math.floor(Math.random() * specialCharArr.length)];
    for (var i = 0; i < this.state.value; i++) {
      var randArrayValue = this.state.randomList[
        Math.floor(Math.random() * this.state.randomList.length)
      ];
      if (i < this.state.value) {
        newArray.push(randArrayValue);
      }
    }
    if (this.state.addSpec) {
      var randLetter = newArray[Math.floor(Math.random() * newArray.length)];
      if (newArray.indexOf(randLetter) > -1) {
        newArray[newArray.indexOf(randLetter)] = randSpecValue;
      }
    }
    this.setState({ randomPassword: newArray.join("") });
  };

  toggle = e => {
    this.setState({ showCopied: !this.state.showCopied });
    setTimeout(() => {
      this.setState({ showCopied: !this.state.showCopied });
    }, 3000);
  };

  toggleOn = e => {
    this.setState({ addSpec: !this.state.addSpec });
  };

  slideInput = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    console.log(this.state.addSpec);
    const { randomPassword } = this.state;
    return (
      <div className="container">
        <Transition
          native
          items={this.state.showCopied}
          from={{ transform: "translate3d(0, -200px, 0)" }}
          enter={{ transform: "translate3d(0, -50px, 0)" }}
          leave={{ transform: "translate3d(0, -200px, 0)" }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <div className="copied">Successfully copied to clipboard</div>
              </animated.div>
            ))
          }
        </Transition>
        <div className="slidercon">
          <input
            type="range"
            min={3}
            max={13}
            value={this.state.value}
            className="slider"
            onChange={this.slideInput}
          ></input>
          <div className="inputvalue">Password length: {this.state.value}</div>
        </div>
        <label className="specialcon">
          <input
            type="checkbox"
            id="special"
            value="special"
            onClick={this.toggleOn}
          ></input>
          <span className="checkbox"></span>
          <span>Include a special character</span>
        </label>
        <CopyToClipboard text={randomPassword}>
          <div className="password" onClick={this.toggle}>
            {randomPassword}
          </div>
        </CopyToClipboard>
        <div className="clickhere">Click your password to copy it!</div>
        <button
          className="generate-password"
          onClick={this.generateNewPassword}
        >
          Generate Password!
        </button>
      </div>
    );
  }
}

export default RandomPassword;
