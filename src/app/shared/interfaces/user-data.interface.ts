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

export const InitialUserData: UserDataInterface = {
  token: '',
  user: {
    id: 0,
    name: '',
    phone: 0,
    email: '',
  },
};
