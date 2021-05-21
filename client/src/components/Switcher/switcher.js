import React from "react";

function Switcher() {
    return (
  
        <div style={{textAlign: 'center'}}>
          <h4 id="labelconcat">Select your customization option</h4>
          <button onclick="optionSwitcher('corncat', 'conecart', 'cokeant','conecat', 'concat', 'labelconcat')" id="element4" className="btn">Click to Select</button>
          <div className="spacer" />
          <img id="corncat" src="../../images/TACornCat.png" alt="Corn Cat"  />
          <img id="conecart" src="../../images/TBConeCart.png" alt="Cone Cart" className="hide" />
          <img id="cokeant" src="../../images/TCCokeAnt.png" alt="Coke Ant" className="hide" />
          <img id="conecat" src="../../images/TDConeCat.png" alt="Corn Cat" className="hide" />
          <img id="concat" src="../../images/TEConcat.png" alt="Concatenation" className="hide" />		
        </div>
      );
    }
  export default Switcher;