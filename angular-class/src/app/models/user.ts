export interface User {
  username: string;
  password?: string; // Senha pode ser opcional se não for sempre retornada
  email?: string;
}