import React, { useState } from "react";

function Deflection(props) {
  let { b = 1, L = 1, LL = 1, fck = 1, dcov, fy = 1, dia = 20 } = props;

  //*********Pre Calculations*******************

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
  //Area of Steel
  let Ast =
    ((0.5 * fck) / fy) *
    (1 - Math.sqrt(1 - (4.6 * Mu) / (fck * b * d * d))) *
    b *
    d;

  let ast = (Math.PI * dia * dia) / 4;
  //number or bars
  let n = Math.ceil(Ast / ast);

  let Ast_actual = n * ast;

  //Design Shear Reinforcement

  let [Tc, setTc] = useState(-1);
  //factored shear force (kN)
  let Vu = (Wu * l) / 2000;
  //Nominal shear stress (N/mm^2)
  let Tv = (Vu * 1000) / (b * d);
  // % of tension reinforcement
  let p = (Ast_actual * 100) / (b * d);

  //*********Pre Calculations*******************

  let [k, setk] = useState(-1);

  let fs = (0.58 * fy * Ast) / Ast_actual;
  let k1 = 1;

  // calling l/d ratio as lbd

  let lbd_max = 20 * k1;
  let lbd_provided = l / d;
  if (k > 0) {
    lbd_max = 20 * k;
  }
  return (
    <div className="card">
      <h3>check of Deflection</h3>
      {k < 0 ? (
        <section>
          <label htmlFor="myk">
            Enter Modification factor(k) corresponding to fs={fs} N/mm^2:{" "}
          </label>
          <input
            type="text"
            id="myk"
            // value={obj.l}
            placeholder="Enter value using chart P.38 IS456"
            onChange={(e) => {
              k1 = e.target.value;
            }}
          />
          <button
            onClick={() => {
              setk(k1);
            }}
          >
            Submit
          </button>
        </section>
      ) : (
        <div>
          {lbd_max > lbd_provided ? (
            <p className="verdict">Safe in Deflection</p>
          ) : (
            <p className="verdict">Not safe in deflection</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Deflection;
