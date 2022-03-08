import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function Clear() {
    setNum(0);
  }

  function porcetage() {
    setNum(num / 100);
  }

  function Change() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === '/') {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === 'X') {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === '-') {
      console.log(oldnum);
      console.log(num);
      console.log(oldnum - num);
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === '+') {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <div className="all">
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="cont">
          <Box m={10} />
          <h1 className="res">{num}</h1>
          <button className="bra" onClick={Clear}>
            AC
          </button>
          <button className="bra" onClick={Change}>
            +/-
          </button>
          <button className="bra" onClick={porcetage}>
            %
          </button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value=",">
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Calculator;
