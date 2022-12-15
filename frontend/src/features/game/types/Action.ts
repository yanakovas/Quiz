import Quiz from "./Quiz";
 type QuizesAction={
    type:'quizes/loadQuizesSuccess';
    payload:Quiz[];
 }
 export default QuizesAction