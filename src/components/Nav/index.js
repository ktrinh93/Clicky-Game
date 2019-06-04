import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Clicky Game!
      </a>
      <span className="navbar-text">
        Score: {props.currentScore} | Top Score: {props.topScore}
      </span>
    </nav>
  );
}

export default Nav;
