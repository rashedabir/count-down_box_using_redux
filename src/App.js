import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreament, increament } from "./actions/countAction";
import "./App.css";

function App() {
  const state = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <div className="container count">
      <h2>Count Down box</h2>
      <h4>using react / redux</h4>
      <div className="count-box">
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(decreament());
          }}
        >
          -
        </button>
        <p> {state} </p>
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(increament());
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
