import { useState } from "react";
import classes from "./App.module.css";
// import Button from "./components/Button/Button";

function App() {
  const [enteredNumber, setEnteredNumber] = useState("0");

  const numberHandler = event => {
    if (enteredNumber === "0" && event.target.innerText === "0") return;
    if (enteredNumber.replace(/[-.]/g, "").length === 9) return;
    if (enteredNumber.includes(".")) {
      setEnteredNumber((enteredNumber + event.target.innerText).toString());
      return;
    }

    const newEnteredNumber = Number(enteredNumber + event.target.innerText);
    setEnteredNumber(newEnteredNumber.toString());
  };

  const clearHandler = () => {
    setEnteredNumber("0");
  };

  const toggleSignHandler = () => {
    const convertNumber = -Number(enteredNumber);
    if (convertNumber === 0) {
      setEnteredNumber(convertNumber.toLocaleString());
      return;
    }
    setEnteredNumber(convertNumber.toString());
  };

  const dotHandler = event => {
    if (enteredNumber.includes(".")) return;
    if (enteredNumber.replace("-", "").length === 9) return;
    const newEnteredNumber = enteredNumber + ".";
    setEnteredNumber(newEnteredNumber.toString());
  };

  const convertToPercentHandler = () => {};

  let displayNumber = Number(enteredNumber).toLocaleString(undefined, {
    maximumFractionDigits: 8,
  });
  if (enteredNumber.at(-1) === ".") {
    displayNumber += ".";
  }

  return (
    <div className={classes.App}>
      <div className={classes["calc-container"]}>
        <div className={classes["screens-container"]}>
          <div>{displayNumber}</div>
        </div>
        <div className={classes["buttons-container"]}>
          <button onClick={clearHandler}>AC</button>
          <button onClick={toggleSignHandler}>+/-</button>
          <button onClick={convertToPercentHandler}>%</button>
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
          <button onClick={dotHandler}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
