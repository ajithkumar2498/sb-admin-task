import React, { useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import { CounterReducer } from '../reducer/CounterReducer';

const initialvalues ={  value:0}

function UseReducer() {
  let [counter,counterDispatch]=useReducer(CounterReducer,initialvalues)
  return <>
  <h5>usereducer</h5>
  <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid"> 
  <Button variant="success" onClick={()=>{counterDispatch({action:"INCREMENT"})}}>+</Button> 
  &nbsp; &nbsp; &nbsp; &nbsp;
  {counter.value} 
  &nbsp; &nbsp; &nbsp; &nbsp;
  <Button variant="danger" onKeyUp={()=>{counterDispatch({action:"DECREMENT"} )}}>-</Button>  <br /> 
  <Button variant="primary" onClick={()=>{counterDispatch({action:"default"})}}>clear</Button>
  </div>
  </div>
  </div>
</>
}

export default UseReducer