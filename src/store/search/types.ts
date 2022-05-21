import { Repo, User } from 'service/apiService';

export type UserData = {
  user: User | null;
  repos: Repo[] | null;
};

export type SearchState = {
  query: string;
  result: null | UserData;
  errorMessage: string;
  currentPage: number;
};

export type FetchUserDataReturn = {
  user: User;
  repos: Repo[];
} | null;
