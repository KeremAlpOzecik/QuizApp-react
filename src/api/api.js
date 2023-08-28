const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount, setLoading) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(url)).json();
  setLoading(true);
  return data.results.map((dt) => ({
    ...dt,
    answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer]),
  }));
};
