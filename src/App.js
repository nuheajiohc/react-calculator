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

  // indexOf() === -1 일 경우 맨 뒤에 점이 있다고 가정
  // 점앞의 숫자가 한개 1.1>> 0.011 점 떼고 앞에 0두개 붙이고, 첫번째뒤에 점
  //  두개  10.1  >> 0.101   점 떼고 앞에 0 한개 붙이고, 첫번째 뒤에 점
  //  세개 100.1 >> 1.001    점떼고 첫번째 숫자 뒤에 점

  const convertToPercentHandler = () => {
    if (enteredNumber === "0") return;
    if (enteredNumber === "0.") {
      setEnteredNumber("0");
      return;
    }
    let convertToPercentNumber = enteredNumber;
    let enteredNumberSplit = enteredNumber.split(".");
    if (enteredNumberSplit[0].length === 1) {
      convertToPercentNumber = `0.0${enteredNumberSplit[0]}`;
    } else if (enteredNumberSplit[0].length === 2) {
      convertToPercentNumber = `0.${enteredNumberSplit[0]}`;
    } else {
      convertToPercentNumber =
        enteredNumberSplit[0].slice(0, -2) +
        "." +
        enteredNumberSplit[0].slice(-2);
    }
    if (enteredNumberSplit[1] !== undefined) {
      convertToPercentNumber += enteredNumberSplit[1];
    }
    if (convertToPercentNumber.replace(/[-.]/g, "").length > 9) return;
    setEnteredNumber(convertToPercentNumber);
  };

  const [integerPart, decimalPart] = enteredNumber.split(".");
  let displayNumber = Number(integerPart).toLocaleString();
  if (enteredNumber.split(".").length === 2) displayNumber += ".";
  if (decimalPart !== undefined) displayNumber += decimalPart;

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
