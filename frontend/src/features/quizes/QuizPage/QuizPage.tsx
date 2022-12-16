import { useState } from 'react';

function QuizPage(): JSX.Element {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState(false);

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const handleButtonClick = (event: React.MouseEvent): void => {
    if (text === answer) {
      setStatus(true);
    }
  };

  return (
    <div className="uno">
      <div>
        <input
          name="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Введите ответ"
        />
      </div>

      <div>
        <button onClick={handleButtonClick}>Отправить</button>
      </div>
    </div>
  );
}

export default QuizPage;
