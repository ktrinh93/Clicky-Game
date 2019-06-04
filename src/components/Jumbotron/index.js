import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h1>Clicky Game!</h1>
      <br/>
      <span>
        Click on an image to earn points, but don't click on any more than once!
      </span>
      <br/>
      <br/>
      <span>
        {props.msg}
      </span>
    </div>
  );
}

export default Jumbotron;
