export type BookmarkFromDb = {
  id: number;
  title: string;
  desc: string;
  url: string;
};

export type BookmarkCreateDto = {
  url: string;
  title?: string;
  desc?: string;
};

export type BookmarkUpdateDto = {
  id: string;
  url?: string;
  title?: string;
  desc?: string;
};

export type UserCreateDto = {
  username: string;
  // password?: string;
  isAdmin?: number;
};
