function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator-result">0</div>
        <div className="digit-wrapper">
          <button className="digit">9</button>
          <button className="digit">8</button>
          <button className="digit">7</button>
          <button className="digit">6</button>
          <button className="digit">5</button>
          <button className="digit">4</button>
          <button className="digit">3</button>
          <button className="digit">2</button>
          <button className="digit">1</button>
          <button className="digit">0</button>
        </div>
        <div className="modifier-wrapper">
          <button className="modifier">AC</button>
        </div>
        <div className="operations-wrapper">
          <button className="operation">/</button>
          <button className="operation">X</button>
          <button className="operation">-</button>
          <button className="operation">+</button>
          <button className="operation">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
