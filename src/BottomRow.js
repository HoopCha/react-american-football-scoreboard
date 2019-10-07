import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [currentQuarter, setcurrentQuarter] = useState(1);
  const [ballOn, setBallOn] = useState(50);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <div className="rowofButtons">
        <button className="scoreButtons" onClick={() => setDown(down + 1)}>Down</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <div className="rowofButtons">
        <button className="scoreButtons" onClick={() => setToGo(toGo + 1)}>+1</button>
        <button className="scoreButtons" onClick={() => setToGo(toGo - 1)}>-1</button>
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <div className="rowofButtons">
        <button className="scoreButtons" onClick={() => setBallOn(ballOn - 10)}>-10</button>
        <button className="scoreButtons" onClick={() => setBallOn(ballOn - 1)}>-1</button>
        <button className="scoreButtons" onClick={() => setBallOn(ballOn + 1)}>+1</button>
        <button className="scoreButtons" onClick={() => setBallOn(ballOn + 10)}>+10</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{currentQuarter}</div>
        <div className="rowofButtons">
          <button className="scoreButtons" onClick={() => setcurrentQuarter(currentQuarter + 1)}>Next Quarter</button>
          <button className="scoreButtons" onClick={() => (setcurrentQuarter(1), setBallOn(50), setToGo(0), setDown(0))}>Reset All</button>
          </div>
      </div>
    </div>
    
  );
};

export default BottomRow;


