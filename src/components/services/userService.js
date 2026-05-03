import axios from "axios";

// CRA madhe REACT_APP_ prefix lagtо
const API = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
  return await axios.get(API);
};

export const createUser = async (data) => {
  return await axios.post(API, data);
};

export const updateUser = async (id, data) => {
  return await axios.put(`${API}/${id}`, data);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API}/${id}`);
};