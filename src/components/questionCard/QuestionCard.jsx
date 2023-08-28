import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./QuestionCard.css";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  setModal,
  loading
}) => {
  const [timer, setTimer] = useState(30);
  const approvedChoice = (e) => {
    const checkAnswer = e.target.value == questionsData[count]?.correct_answer;
    if (checkAnswer) {
      setScore(score + 100);
    }
    setCount(count + 1);
    if (count == 9) {
      setModal(true);
    }
    setTimer(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (loading && timer > 0) setTimer(timer - 1);

      if (timer == 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count == 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer,loading]);

  return (
    loading ? 
        <div className="questionCard">
       <div className="questionCard-title">
        <div className="questionCard-timer"> {timer}</div>
        {count + 1}/10 -  {questionsData[count]?.question }
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button onClick={approvedChoice} key={i} value={answer}>
          {answer}
        </button>
      ))} 
    </div> :<Loading/>

    
  );
};

export default QuestionCard;
