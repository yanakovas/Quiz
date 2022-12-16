import { useSelector } from "react-redux";
import { selectTopics } from "../selectors";
import TopicPage from "../TopicPage/TopicPage";

function GamePage(): JSX.Element {
  const topics = useSelector(selectTopics);
  const quizTheme1 = topics.filter((el) => el.id === 1);
  const quizTheme2 = topics.filter((el) => el.id === 2);
  const quizTheme3 = topics.filter((el) => el.id === 3);

  return (
    <div>
      <h1>Это страница с игрой</h1>
      <div>
        <TopicPage topic={quizTheme1} />
        <TopicPage topic={quizTheme2} />
        <TopicPage topic={quizTheme3} />
      </div>
    </div>
  );
}

export default GamePage;
