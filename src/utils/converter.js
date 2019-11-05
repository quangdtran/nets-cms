export const convertMapToListQuestion = (map) => {
  const listQuestion = [];
  map.forEach((value, key) => listQuestion.push({ questionId: key, answerId: value }));
  return listQuestion;
};

export const convertMapToListAnswer = (map) => {
  const listAnswer = {};
  map.forEach((value, key) => { listAnswer[key] = value; });
  return listAnswer;
};
