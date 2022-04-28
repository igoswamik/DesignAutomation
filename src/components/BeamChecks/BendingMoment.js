import React from "react";

let Moment = 0;
function BendingMoment(props) {
  let { b = 1, L = 1, LL = 1, fck = 1, dcov } = props;

  //effective depth
  let d = L / 15;
  //overall depth
  let D = +d + +dcov;
  //effect span
  let l = +L + +d < +b + +L ? +L + +d : +b + +L;
  //self wt of beam b*D*density
  let DL = (b * D * 1 * 25) / 1000000;
  let W = +LL + +DL;

  //ultimate load
  let Wu = 1.5 * W;
  let Mu = (Wu * l * l) / 8; //design bending moment
  Moment = Mu;
  let dreq = Math.sqrt(Mu / (0.138 * fck * b));

  let Mulim = 0.138 * fck * b * d * d;

  if (+Mulim > +Mu) {
    console.log("Under-Reinforced Section");
  }
  console.log("in bending", d, D, l, DL, W, Wu, Mu, dreq);
  if (d > dreq) {
    return (
      <div className="card">
        <h3>Design Bending moment check</h3>
        <p>Design Bending moment = {Mu} Nmm</p>
        <p>required depth (dreq) = {dreq}</p>
        <p>provided depth (dprov) = {d}</p>
        <p>
          Effective depth provided is sufficient to carry this moment of {Mu}{" "}
          Nmm
        </p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <p>
          <h3>Design Bending moment check</h3>
          <p>Design Bending moment = {Mu} Nmm</p>
          <p>required depth (dreq) = {dreq}</p>
          <p>provided depth (dprov) = {d}</p>
          <p className="verdict">
            Effective depth provided is not sufficient to carry this moment of{" "}
            {Mu}
          </p>
        </p>
        Nmm
      </div>
    );
  }
}

export default BendingMoment;

export const moment = Moment;
