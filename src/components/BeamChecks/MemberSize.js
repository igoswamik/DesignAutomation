import React from "react";

function MemberSize(props) {
  let L = props.L,
    dcov = props.dcov,
    b = props.b;
  //for simply supported beams L/d<=20
  //effective depth
  let d = L / 15;
  //overall depth
  let D = +d + +dcov;

  //effect span
  let l = +L + +d < +b + +L ? +L + +d : +b + +L;

  return (
    <div className="card">
      <h3>Member Size</h3>
      <p>Effective span (l) = {l} </p>
      <p>Effective depth (d) = {d} </p>
      <p>Overall depth (D) = {D} </p>
    </div>
  );
}

export default MemberSize;
