// Этот файл отвечает за общение клиента с сервером (фечи)

import Quiz from './types/Quiz';


// функция загрузки с сервера всех квизов

export async function loadQuizes(): Promise<Quiz[]> {
  const response = await fetch('/api/quizes');
  const result = await response.json();
  return result;
}
