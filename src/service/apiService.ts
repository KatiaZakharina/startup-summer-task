import axios from 'axios';

export type User = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
};

export type Repo = {
  name: string;
  description: string;
  html_url: string;
};

class ApiService {
  baseUrl = 'https://api.github.com';
  axiosInstance = axios.create({ baseURL: this.baseUrl });

  async getUser(userName: string): Promise<User> {
    const { data } = await this.axiosInstance.get(`/users/${userName}`);
    return data;
  }

  async getRepositories(userName: string): Promise<Repo[]> {
    const { data } = await this.axiosInstance.get(`/users/${userName}/repos`);
    return data;
  }
}

export default new ApiService();
