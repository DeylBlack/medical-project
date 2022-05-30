export interface UserDataInterface {
  token: string;
  user: UserInterface;
}

export interface UserInterface {
  id: number;
  name: string;
  phone: number;
  email: string;
}
