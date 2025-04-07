import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const[amount,setAmount]=useState(0);
  const[rate,setRate]=useState(0);
  const[discount,setDiscount]=useState(0);
  const[newprice,setNewprice]=useState(0);
  
  const calculate = (e) => {
    const dis = (amount * rate ) / 100;
    const newp =amount-dis;
    setDiscount(dis);
    setNewprice(newp);
  };
  const reset = (e) => {
    
    setAmount(0);
    setRate(0);
    setDiscount(0);
  };
  
  

  return (
    <>
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>Discount Calculator</h2>
          <p>Calculate discounts with us</p>
        </div>
        <div className="result-row">
            <div className="col">
              <h2>&#8377; {discount}</h2>
              <p>Amount Saved</p>
            </div>
            <div className="col final">
              <h2>&#8377; {newprice}</h2>
              <p>Final price</p>
            </div>
        </div>

        <div className="Form">
          <form className='input'>
            <TextField id="outlined-basic" label="Amount" onChange={e=>setAmount(e.target.value)} variant="outlined" value={amount ||""} />
            <TextField id="filled-basic" label="Discount rate" onChange={e=>setRate(e.target.value)}variant="filled" value={rate ||""}/>
          </form>
        </div>
        <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Get My Discount</Button>
          <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
