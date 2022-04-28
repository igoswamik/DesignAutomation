import React from "react";

function SizeOfBeam(props) {
  const { l = 1, b = 1, d = 1 } = props;
  return (
    <div>
      <h5>Amount of steel = {0.04 * b * d}</h5>
      <h5>Number of Stirrups= {(l - 2 * 25) / 30 + 1}</h5>
    </div>
  );
}

export default SizeOfBeam;
