import Quiz from '../types/Quiz';

type OneQuizViewProps = {
  quiz: Quiz;
};

function OneQuizView({ quiz }: OneQuizViewProps): JSX.Element {
  return <div>{quiz.que_point}</div>;
}

export default OneQuizView;
