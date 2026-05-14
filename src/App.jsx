import React, { useState } from 'react'
import Register from "./components/Register"
import Result from './components/Result';
import StepTwo from './components/StepTwo';
import { users } from "./data/users"

const App = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(null);

  const startAnalysis = (form) => {
    const targetGender = gender === "male" ? "female" : "male";
    const filteredUsers = users.filter((user) => user.gender === targetGender);

    const matchedUsers = filteredUsers.map((user) => {
      let score = 0;

      if (Math.abs(user.age - Number(form.age)) <= 3) {
        score += 16;
      }

      if (user.city.toLowerCase() === form.city.toLowerCase()) {
        score += 30;
      }

      if (Math.abs(user.height - Number(form.height)) <= 10) {
        score += 20;
      }

      if (Math.abs(user.salary - Number(form.salary)) <= 500) {
        score += 10;
      }

      if (user.job.toLowerCase() === form.job.toLowerCase()) {
        score += 40;
      }

      return {
        ...user,
        score,
      }
    })

    const bestMatch = matchedUsers.sort((a, b) => b.score - a.score)[0];

    setResult({
      username: bestMatch.username,
      percent: bestMatch.score,
    });
    setStep(3);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a]'>
      {step === 1 && (
        <Register setStep={setStep} setGender={setGender} />
      )}

      {step === 2 && (
        <StepTwo startAnalysis={startAnalysis} />
      )}

      {step === 3 && (
        <Result result={result} />
      )}
    </div>
  )
}

export default App;