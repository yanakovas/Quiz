// Этот файл отвечает за общение клиента с сервером (фечи)


import Topic from './types/Topics';

// функция загрузки с сервера всех квизов

export async function loadTopics(): Promise<Topic[]> {
  const response = await fetch('/api/topics');
  const result = await response.json();
  return result;
}
