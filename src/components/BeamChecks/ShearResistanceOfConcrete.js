import React from "react";

function ShearResistanceOfConcrete(props) {
  let { Tc, b, d, Vu, fy } = props;
  //Shear Resistance Of Concrete
  let Vuc = (Tc * b * d) / 1000;
  let Vus = Vu - Vuc;

  //Providing 8mm dia 2 leg vertical stirrups

  let Asv = (Math.PI * 8 * 8 * 2) / 4;

  //Spacing of Stirrups
  let s1 = (0.87 * fy * Asv * d) / (Vus * 1000);
  let s2 = (Asv * 0.87 * fy) / (0.4 * b);
  let s3 = 0.75 * d;
  let s4 = 300;
  let s = Math.round(Math.min(s1, s2, s3, s4));

  return (
    <div>
      <p>Nominal shear Strength greater than Design Shear Strength</p>
      <p>Hence Shear Reinforcement has to be provided</p>
      <p>In this case we shall provide vertical stirrups</p>
      <p className="verdict">
        Provide 8mm diameter 2 leg vertical stirrups @ {s}mm c/c spacing
      </p>
    </div>
  );
}

export default ShearResistanceOfConcrete;
