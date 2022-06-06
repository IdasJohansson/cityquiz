import { useEffect, useState } from "react";

export const Quiz = () => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({
    id: null,
    answerSelected: null,
  });

  /*
  useEffect(() => {
    fetch("https://localhost:5001/api/Questions")
      .then((response) => response.json())
      .then((data) => setQuestion(data));
  }, []);
  */

  const checkAnswer = (e) => {
    setAnswer({
      id: question.id,
      answerSelected: e,
    });
    console.log(answer);
    console.log(question);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>What city is located in {question.title}?</h2>
      <button
        onClick={(e) => checkAnswer(e.target.value)}
        value={question.answerOne}
      >
        {question.answerOne}
      </button>
      <button
        onClick={(e) => checkAnswer(e.target.value)}
        value={question.answerTwo}
      >
        {question.answerTwo}
      </button>
      <button
        onClick={(e) => checkAnswer(e.target.value)}
        value={question.answerThree}
      >
        {question.answerThree}
      </button>
    </div>
  );
};