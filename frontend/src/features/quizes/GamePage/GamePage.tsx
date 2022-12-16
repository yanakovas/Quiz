import { useSelector } from 'react-redux';
import { selectTopics } from '../selectors';
import TopicPage from '../TopicPage/TopicPage';
import './GamePage.css'

function GamePage(): JSX.Element {
  const topics = useSelector(selectTopics);

  return (
    <div className="gamePage">
      <h1>Это страница с игрой</h1>
      <div className='container'>
        {topics.map((topic)=>(
          <TopicPage key={topic.id} topic={topic} />
        ))}
        
      </div>
    </div>
  );
}

export default GamePage;

