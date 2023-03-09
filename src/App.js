import { useState } from "react";
import classes from "./App.module.css";
// import Button from "./components/Button/Button";

function App() {
  const [enteredNumber, setEnteredNumber] = useState("0");
  const [displayNumber, setDisplayNumber] = useState("0");
  const [numberLimitCount, setNumberLimitCount] = useState(0);

  const numberHandler = event => {
    // const newEnteredNumber = Number(enteredNumber + event.target.innerText);
    if (enteredNumber === "0" && event.target.innerText === "0") return;
    if (numberLimitCount === 9) return;
    setNumberLimitCount(prevCount => prevCount + 1);
    if (enteredNumber.includes(".")) {
      setEnteredNumber((enteredNumber + event.target.innerText).toString());
      setDisplayNumber(displayNumber + event.target.innerText);
      return;
    }
    const newEnteredNumber = Number(enteredNumber + event.target.innerText);
    setEnteredNumber(newEnteredNumber.toString());
    setDisplayNumber(newEnteredNumber.toLocaleString());
  };

  const clearHandler = () => {
    setEnteredNumber("0");
    setDisplayNumber("0");
    setNumberLimitCount(0);
  };

  const toggleSignHandler = () => {
    const convertNumber = -Number(enteredNumber);
    if (convertNumber === 0) {
      setEnteredNumber(convertNumber.toLocaleString());
      setDisplayNumber(convertNumber.toLocaleString());
      return;
    }
    setEnteredNumber(convertNumber.toString());
    setDisplayNumber(convertNumber.toLocaleString());
  };

  const dotHandler = event => {
    if (enteredNumber.includes(".")) return;
    const newEnteredNumber = enteredNumber + ".";
    const newDisplayNumber = displayNumber + ".";
    setEnteredNumber(newEnteredNumber.toString());
    setDisplayNumber(newDisplayNumber.toString());
  };

  // const displayNumber = Number(enteredNumber).toLocaleString(undefined, {
  //   maximumFractionDigits: 8,
  // });
  console.log(enteredNumber);
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
          <button onClick={dotHandler}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
