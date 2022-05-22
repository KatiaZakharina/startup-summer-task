import axios from 'axios';

import { REPO_PER_PAGE, SERVER_URI } from 'appConstants';

export type User = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

export type Repo = {
  name: string;
  description: string;
  html_url: string;
};

class ApiService {
  baseUrl = SERVER_URI;
  axiosInstance = axios.create({ baseURL: this.baseUrl });

  async getUser(userName: string): Promise<User> {
    const { data } = await this.axiosInstance.get(`/users/${userName}`);
    return data;
  }

  async getRepositories(userName: string, page: number): Promise<Repo[]> {
    const { data } = await this.axiosInstance.get(
      `users/${userName}/repos?q=&per_page=${REPO_PER_PAGE}&page=${page}`
    );
    return data;
  }
}

export default new ApiService();
