export type Event = {
  id: number;
  name: string;
  description?: string;
  users: User[];
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};
