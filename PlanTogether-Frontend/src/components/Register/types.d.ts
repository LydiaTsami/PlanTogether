export type RegisterRequest = {
  username: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
};
