import React, { useState } from "react";
import ShearResistanceOfConcrete from "./ShearResistanceOfConcrete";
function ShearReinforcement(props) {
  let { b = 1, L = 1, LL = 1, fck = 1, dcov, fy = 1, dia = 20 } = props;
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

  //Design Shear Strength of concrete (from P.73 table 19 IS456:2000)
  let Tc1 = 0.5;

  return (
    <div className="card">
      <h3>Design Shear Reinforcement</h3>
      {Tc === -1 ? (
        <section>
          <label htmlFor="myTc">
            Enter the value of design shear strength for percentage of
            reinforcement p={p}%{" "}
          </label>
          <input
            type="text"
            id="myTc"
            placeholder="Enter value in N/mm^2"
            onChange={(e) => {
              Tc1 = e.target.value;
            }}
          />
          <button
            onClick={(e) => {
              setTc(Tc1);
            }}
          >
            Submit
          </button>
        </section>
      ) : (
        <div>
          {Tv > Tc ? (
            <ShearResistanceOfConcrete Tc={Tc} b={b} d={d} Vu={Vu} fy={fy} />
          ) : (
            <div className="verdict">Shear reinforcement is not needed</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShearReinforcement;
