import classes from "./App.module.css";
import Button from "./components/Button/Button";

function App() {
  const calcButtonList = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  const buttons = calcButtonList.map(btn => <Button>{btn}</Button>);

  return (
    <div className={classes.App}>
      <div className={classes["calc-container"]}>
        <div className={classes["screens-container"]}>
          <input />
          <input />
        </div>
        <div className={classes["buttons-container"]}>{buttons}</div>
      </div>
    </div>
  );
}

export default App;
