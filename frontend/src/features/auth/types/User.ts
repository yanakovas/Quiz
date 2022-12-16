type User = {
  id: number;
  login: string;
  points: number;
};

export type QuizId = User['id'];

export default User;
