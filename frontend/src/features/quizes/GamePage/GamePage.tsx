import { useSelector } from 'react-redux';
import { selectTopics } from '../selectors';
import TopicPage from '../TopicPage/TopicPage';

function GamePage(): JSX.Element {
  const topics = useSelector(selectTopics);
  
  // const quizTheme1 = topics.forEach((el) => {
  //   if (el.id === 1) {
  //     return el;
  //   }
  // });
  // const quizTheme2 = topics.forEach((el) => {
  //   if (el.id === 2) {
  //     return el;
  //   }
  // });
  // const quizTheme3 = topics.forEach((el) => {
  //   if (el.id === 3) {
  //     return el;
  //   }
  // });
  // const quizTheme2 = topics.filter((el) => el.id === 2);
  // const quizTheme3 = topics.filter((el) => el.id === 3);

  return (
    <div>
      <h1>Это страница с игрой</h1>
      <div>
        <TopicPage topic={topics[0]} />
        <TopicPage topic={topics[1]} />
        <TopicPage topic={topics[2]} />
      </div>
    </div>
  );
}

export default GamePage;
