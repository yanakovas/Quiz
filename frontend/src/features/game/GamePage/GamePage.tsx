import { useSelector } from 'react-redux';
import { selectQuizes } from '../selectors';
import TopicPage from '../TopicPage/TopicPage';

function GamePage(): JSX.Element {
  const quizes = useSelector(selectQuizes);
  const quizTheme1 = quizes.filter((el) => el.topic_id === 1);
  const quizTheme2 = quizes.filter((el) => el.topic_id === 2);
  const quizTheme3 = quizes.filter((el) => el.topic_id === 3);

  return (
    <div>
      <h1>Это страница с игрой</h1>
      <div>
        <TopicPage quizes={quizTheme1} />
        <TopicPage quizes={quizTheme2} />
        <TopicPage quizes={quizTheme3} />
      </div>
    </div>
  );
}

export default GamePage;
