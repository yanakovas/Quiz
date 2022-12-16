import OneQuizView from "../OneQuizView/OneQuizView";

import Topic from "../types/Topics";

type TopicPageProps = {
  topic: Topic;
};

function TopicPage({ topic }: TopicPageProps): JSX.Element {
  return (
    <div>
      <h1>Темы(топики)</h1>
      <div>
        {topic.Quizzes.map((quiz) => (
          <OneQuizView key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
