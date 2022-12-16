import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectTopics } from '../selectors';
import Topic from '../types/Topics';

function QuizPage(): JSX.Element {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'none' | boolean>('none');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { QuestionId } = useParams();

  const quizes = useSelector(selectTopics);

  const handleQuestionAnswer():void{
    setAnswer(quizes.find( question => question.id === QuestionId)) 
  }

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const handleButtonClick = (event: React.MouseEvent): void => {
    if (text === answer) {
      setTimeout(() => {
        setStatus(true);
      }, 300);
      dispatch({ type: 'quizes/answerQuestionSuccess', payload: points });
    } else {
      setTimeout(() => {
        setStatus(false);
      }, 300);
      dispatch({ type: 'quizes/answerQuestionFailed', payload: answer });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 m-5">
      {status === 'none' && (
        <div className="container border border-5 rounded p-3">
          <div className="card-body">
            <h1 className="card-title mb-1 text-white">ТЕМА</h1>
            <h3 className="card-text mb-3 text-white">ВОПРОС</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Введите ответ"
                aria-describedby="basic-addon2"
                value={text}
                onChange={handleTextChange}
              />
            </div>
            <button
              type="button"
              onClick={handleButtonClick}
              className="btn btn-primary"
            >
              Отправить
            </button>
          </div>
        </div>
      )}
      {status === true && (
        <div className="card-body">
          <p className="text-success">Правильно!</p>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => navigate('/')}
          >
            Далее
          </button>
        </div>
      )}
      {status === false && (
        <div className="card-body">
          <p className="text-danger">Не угадали!</p>
          <p className="text-danger">{answer}</p>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => navigate('/')}
          >
            Далее
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
