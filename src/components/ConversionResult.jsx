import React from 'react';
import './ConversionResult.css';

function ConversionResult({result}){
  
  const toHexa = number => {
    var hex = number.toString(16);
    if((number.length % 2) > 0){
      number = "0" + number;
    }
    return hex;
  }

  const toDec = number => {
    var dec = number.toString(10);
    if((number.length % 2) > 0){
      number = "0" + number;
    }
    return dec;
  }

  const toOcta = number => {
    var oct = number.toString(8);
    if((number.length % 2) > 0){
      number = "0" + number;
    }
    return oct;
  }

  const toBinary = number => {
    let str = "";
    var bin = number.toString(2);
    
    if((number.length % 2) > 0){
      number = "0" + number;
    }
    str = bin.toString()
    let newStr = str.match(/.{1,8}/g)

    return newStr.join(' ');
  }

  return (
    <div className="conversion_result">
      <p>HEX: {toHexa(parseInt(result))}</p>
      <p>DEC: {toDec(parseInt(result))}</p>
      <p>OCT: {toOcta(parseInt(result))}</p>
      <p>BIN: {toBinary(parseInt(result))}</p>
    </div>
  )
}

export default ConversionResult
