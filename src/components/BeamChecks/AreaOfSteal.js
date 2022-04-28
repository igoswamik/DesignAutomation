import React from "react";
import { moment } from "./BendingMoment";

console.log("got Mu=", moment);

function AreaOfSteal(props) {
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

  console.log("Ast(mm^2)=", Ast);

  let ast = (Math.PI * dia * dia) / 4;
  //number or bars
  let n = Math.ceil(Ast / ast);

  let Ast_actual = n * ast;
  let min_Ast = (0.85 * b * d) / fy;
  let max_Ast = 0.04 * b * D;
  let condition = false;
  if (Ast_actual < max_Ast && Ast_actual > min_Ast) condition = true;
  return (
    <div className="card">
      <h3>Area of Steel check</h3>
      <p>Area Of Steal required (Ast)= {Ast} mm^2</p>
      <p className="verdict">
        Provide {n} bars of {dia}mm diameter @ tension side
      </p>

      {condition === true ? (
        <p className="verdict">Design OK</p>
      ) : (
        <p>Design not OK</p>
      )}
    </div>
  );
}

export default AreaOfSteal;
