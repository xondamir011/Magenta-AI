import React, { useState } from 'react';
import Register from "./components/Register";
import Result from './components/Result';
import StepTwo from './components/StepTwo';
import Ideal from './components/Ideal';
import AiBase from './components/AiBase';
import { users } from "./data/users";

const App = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(null);
  const [idealText, setIdealText] = useState("");
  const [userForm, setUserForm] = useState({});

  const startAnalysis = (text) => {
    const targetGender = gender === "male" ? "female" : "male";

    const filteredUsers = users.filter((user) => user.gender === targetGender);

    const matchedUsers = filteredUsers.map((user) => {
      let score = Math.floor(Math.random() * 40) + 60;

      if (text.toLowerCase().includes(user.job.toLowerCase())) {
        score += 10;
      }

      return { ...user, score };
    });

    const bestMatch = matchedUsers.sort((a, b) => b.score - a.score)[0];

    setResult({
      username: bestMatch.username,
      percent: bestMatch.score,
      ideal: text,
      age: bestMatch.age,
      city: bestMatch.city,
      job: bestMatch.job,
    });

    setStep(4);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a]'>

      {step === 1 && (
        <Register setStep={setStep} setGender={setGender} />
      )}

      {step === 2 && (
        <StepTwo setStep={setStep} setUserForm={setUserForm} />
      )}

      {step === 3 && (
        <Ideal
          onNext={(text) => {
            setIdealText(text);
            setStep("loading");
          }} />
      )}

      {step === "loading" && (
        <AiBase
          onDone={() => startAnalysis(idealText)} />
      )}

      {step === 4 && (
        <Result result={result} />
      )}

    </div>
  );
};

export default App;