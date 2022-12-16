import OneQuizView from '../OneQuizView/OneQuizView';
import Quiz from '../types/Quiz';

type TopicPageProps = {
  quizes: Quiz[];
};

function TopicPage({ quizes }: TopicPageProps): JSX.Element {
  return (
    <div>
      <h1>Это страница с игрой</h1>
      <div>
        {quizes.map((quiz) => (
          <OneQuizView key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
