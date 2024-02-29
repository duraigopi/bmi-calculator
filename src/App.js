import React, { useState } from 'react'

const App = () => {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState("");
  const [bmiStatus,setBmiStatus]=useState("");
  const [errorMsg,setErrorMsg]=useState("")
  const calculateBmi=()=>{
    if(height && weight){
      const heightInMeters=height/100;
      const bmiValue=weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("UnderWeight")
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal Weight")
      }
      else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("OverWeight")
      }
      else{
        setBmiStatus("Obese")
      }
      setErrorMsg("")
    }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMsg("Please Enter Valid Numeric Values for height and Weight.")
    }
  }
  const clear=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }
  return (
    <div className='bmi-calculator'>
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {errorMsg &&<p className='error'>{errorMsg}</p>}
        <div className="input-container">
          <label htmlFor='height'>Height (in cms):</label>
          <input type='text' id='height' value={height} onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor='weight'>Weight (in kgs):</label>
          <input type='text' id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <button className="calculateButton" onClick={calculateBmi}>Calculate BMI</button>
        <button className='clearButton' onClick={clear}>Clear</button>
        {bmi!==null && (
        <div className="result">
          <p>Your BMI is : {bmi}</p>
          <p>Status : {bmiStatus}</p>
        </div>)}
      </div>
    </div>
  )
}

export default App