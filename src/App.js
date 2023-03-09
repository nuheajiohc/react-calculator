import { useState } from "react";
import classes from "./App.module.css";
// import Button from "./components/Button/Button";

function App() {
  const [enteredNumber, setEnteredNumber] = useState("0");
  const [displayNumber, setDisplayNumber] = useState("0");

  const numberHandler = event => {
    const newEnteredNumber = Number(enteredNumber + event.target.innerText);
    setEnteredNumber(newEnteredNumber.toString());
    setDisplayNumber(newEnteredNumber.toLocaleString());
  };

  const clearHandler = () => {
    setEnteredNumber("0");
    setDisplayNumber("0");
  };

  const toggleSignHandler = () => {
    const convertNumber = -Number(enteredNumber);
    setEnteredNumber(convertNumber.toString());
    setDisplayNumber(convertNumber.toLocaleString());
  };

  return (
    <div className={classes.App}>
      <div className={classes["calc-container"]}>
        <div className={classes["screens-container"]}>
          <div></div>
          <div>{displayNumber}</div>
        </div>
        <div className={classes["buttons-container"]}>
          <button onClick={clearHandler}>AC</button>
          <button onClick={toggleSignHandler}>+/-</button>
          <button>%</button>
          <button>/</button>
          <button onClick={numberHandler}>7</button>
          <button onClick={numberHandler}>8</button>
          <button onClick={numberHandler}>9</button>
          <button onClick={numberHandler}>X</button>
          <button onClick={numberHandler}>4</button>
          <button onClick={numberHandler}>5</button>
          <button onClick={numberHandler}>6</button>
          <button>-</button>
          <button onClick={numberHandler}>1</button>
          <button onClick={numberHandler}>2</button>
          <button onClick={numberHandler}>3</button>
          <button>+</button>
          <button onClick={numberHandler}>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
