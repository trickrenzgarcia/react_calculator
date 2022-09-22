import React, { useEffect, useState } from 'react';
import './App.css';
import Result from './components/Result';
import GridButton from './components/GridButton';
import ConversionResult from './components/ConversionResult';

const App = () => {
  const [result, setResult] = useState("");

  const onClick = button => {
    if(button == "=")
      calculate();
    else if(button == "C")
      reset();
    else if(button == "CE")
      backspace();
    else {
      setResult(result + button);
    }
  }

  const calculate = () => {
    let checkResult = '';
    if(result.includes('--')){
      checkResult = result.replace('--','++');
    } else checkResult = result;
    try {
      setResult((eval(checkResult) || "") + "")
    } catch(e){
      setResult("Error!");
    }
  }

  const reset = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  return (
    <div className="app">
      <Result result={result}/>
      <GridButton onClick={onClick}/>
      <ConversionResult result={result}/>
    </div>
  )
}

export default App;
