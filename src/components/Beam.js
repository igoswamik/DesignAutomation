import React, { useState } from "react";
import MemberSize from "./BeamChecks/MemberSize";
import BendingMoment from "./BeamChecks/BendingMoment";
import AreaOfSteal from "./BeamChecks/AreaOfSteal";
import ShearReinforcement from "./BeamChecks/ShearReinforcement";
import Deflection from "./BeamChecks/Deflection";
import "./card.css";
function Beam() {
  const [obj, setObj] = useState({
    L: -1,
    b: -1,
    fck: 30,
    fy: 500,
    LL: 12,
    dcov: 30,
    dia: 20,
  });

  let L1 = -1,
    b1 = -1,
    fck1 = 30,
    fy1 = 500,
    LL1 = 12,
    dcov1 = 30,
    dia1 = 20;

  const handleDimensionSubmit = () => {
    let newobj = {
      L: L1,
      b: b1,
      fck: fck1,
      fy: fy1,
      LL: LL1,
      dcov: dcov1,
      dia: dia1,
    };
    setObj(newobj);
    if (L1 < 0) {
      prompt("Enter positive value");
    }
  };

  return (
    <div>
      <h3>Enter the following design parameters</h3>
      {obj.L < 0 ? (
        <div className="card">
          <section>
            <label htmlFor="mylen">
              Enter the length of beam (Clear span):{" "}
            </label>
            <input
              type="text"
              id="mylen"
              placeholder="Enter length in mm"
              onChange={(e) => {
                L1 = e.target.value;
              }}
            />
          </section>
          <section>
            <label htmlFor="myb">Enter the Bearing: </label>
            <input
              type="text"
              id="myb"
              placeholder="Enter length in mm"
              onChange={(e) => {
                b1 = e.target.value;
              }}
            />
          </section>
          <section>
            <label htmlFor="myfy">Enter the Grade of steal(fy): </label>
            <input
              type="text"
              id="myfy"
              // value={obj.l}
              placeholder="Enter value in N/mm^2"
              onChange={(e) => {
                fy1 = e.target.value;
              }}
            />
          </section>
          <section>
            <label htmlFor="myfck">Enter the Grade of Concrete(fck): </label>
            <input
              type="text"
              id="myfck"
              // value={obj.l}
              placeholder="Enter value in N/mm^2"
              onChange={(e) => {
                fck1 = e.target.value;
              }}
            />
          </section>
          <section>
            <label htmlFor="mylen">Enter Live load: </label>
            <input
              type="text"
              id="mylen"
              // value={obj.l}
              placeholder="Enter value in kN/m"
              onChange={(e) => {
                LL1 = e.target.value;
              }}
            />
          </section>
          <section>
            <label htmlFor="mycov">Enter Effective cover: </label>
            <input
              type="text"
              id="mycov"
              // value={obj.l}
              placeholder="Enter value in mm"
              onChange={(e) => {
                dcov1 = e.target.value;
              }}
            />
          </section>
          <section>
            <label htmlFor="mydia">Enter the diameter of steel bars: </label>
            <input
              type="text"
              id="mydia"
              placeholder="Enter length in mm"
              onChange={(e) => {
                dia1 = e.target.value;
              }}
            />
          </section>

          <button onClick={handleDimensionSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <MemberSize L={obj.L} dcov={obj.dcov} b={obj.b} />
          <BendingMoment
            L={obj.L}
            dcov={obj.dcov}
            b={obj.b}
            LL={obj.LL}
            fck={obj.fck}
          />
          <AreaOfSteal
            L={obj.L}
            dcov={obj.dcov}
            b={obj.b}
            LL={obj.LL}
            fck={obj.fck}
            fy={obj.fy}
            dia={obj.dia}
          />
          <ShearReinforcement
            L={obj.L}
            dcov={obj.dcov}
            b={obj.b}
            LL={obj.LL}
            fck={obj.fck}
            fy={obj.fy}
            dia={obj.dia}
          />
          <Deflection
            L={obj.L}
            dcov={obj.dcov}
            b={obj.b}
            LL={obj.LL}
            fck={obj.fck}
            fy={obj.fy}
            dia={obj.dia}
          />
        </div>
      )}
    </div>
  );
}

export default Beam;
