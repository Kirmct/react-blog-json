import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getPost: async () => {
    const responde = await http.get(`/posts`);
    return responde.data;
  },
  getPostDetail: async (id: string) => {
    const responde = await http.get(`/posts/${id}`);
    return responde.data;
  },
  getComments: async (id: string) => {
    const responde = await http.get(`/posts/${id}/comments`);
    return responde.data;
  },
  getUsers: async () => {
    const responde = await http.get(`/users`);
    return responde.data;
  },
  getUserDetail: async (id: string) => {
    const response = await http.get(`/users/${id}`);
    return response.data;
  },
};
