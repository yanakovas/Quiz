import OneQuizView from '../OneQuizView/OneQuizView';

import Topic from '../types/Topics';
import './TopicPage.css'

type TopicPageProps = {
  topic: Topic;
};

function TopicPage({ topic }: TopicPageProps): JSX.Element {
  return (
    <div className='all-topics'>
      <h2>{topic?.title}</h2>
      <div className='topic'>
        
        {topic?.Quizzes.map((quiz) => (
          // при первой загрузке массив топиков пустой по умолчанию. для этого ставим "?"
          <a href=""><OneQuizView key={quiz.id} quiz={quiz} /></a>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
