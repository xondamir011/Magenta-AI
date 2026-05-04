import React, { useState } from 'react'
import Register from "./components/Register"
import Result from './components/Result';
import StepTwo from './components/StepTwo';
import { users } from "./data/users"

const App = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(null);

  const startAnalysis = (username) => {
    if(typeof username !== "string") return;

    const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase());

    if(!user) {
      setResult({
        username,
        percent: 0
      })
      setStep(3);
      return;
    }

    const percent = Math.floor(Math.random() * 40) + 60;

    setResult({
      username: user.username,
      percent,
    });

    setStep(3);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a]'>
      {step === 1 && (
        <Register setStep={setStep} setGender={setGender}/>
      )}

      {step === 2 && (
        <StepTwo startAnalysis={startAnalysis}/>
      )}

      {step === 3 && (
        <Result result={result}/>
      )}
    </div>
  )
}

export default App;