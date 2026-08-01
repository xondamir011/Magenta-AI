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

    const filteredUsers = users.filter(
      (user) => user.gender === targetGender
    );

    const matchedUsers = filteredUsers.map((user) => {
      let score = 20;

      // Tavsif uzunligi
      if (text.length >= 30) score += 10;
      if (text.length >= 60) score += 10;

      // Kasb mosligi
      if (
        text.toLowerCase().includes(user.job.toLowerCase()) ||
        user.job.toLowerCase().includes(text.toLowerCase())
      ) {
        score += 20;
      }

      // Yosh mosligi
      const ageDiff = Math.abs(
        Number(user.age) - Number(userForm.age)
      );

      if (ageDiff <= 2) score += 20;
      else if (ageDiff <= 5) score += 15;
      else if (ageDiff <= 10) score += 10;
      else score += 5;

      // Shahar mosligi
      if (
        user.city &&
        userForm.city &&
        user.city.toLowerCase() === userForm.city.toLowerCase()
      ) {
        score += 10;
      }

      // Daromad
      if (Number(userForm.salary) > 5000000) score += 5;
      if (Number(userForm.salary) > 10000000) score += 5;

      // Kasb kiritilgan bo'lsa
      if (
        userForm.job &&
        userForm.job.length > 3
      ) {
        score += 5;
      }

      // Tasodifiylik
      score += Math.floor(Math.random() * 15);

      // Limit
      if (score > 95) score = 95;
      if (score < 30) score = 30;

      return {
        ...user,
        score,
      };
    });

    matchedUsers.sort((a, b) => b.score - a.score);

    const topUsers = matchedUsers.slice(0, 5);

    const bestMatch =
      topUsers[Math.floor(Math.random() * topUsers.length)];

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