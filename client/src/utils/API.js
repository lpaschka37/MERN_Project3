/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all users
  getUsers() {
    return axios.get("/api/users");
  },
  // Gets specific user with the given id
  getUser(id) {
    return axios.get(`/api/users/${id}`);
  },
  // Deletes the user with the given id
  deleteUsers(id) {
    return axios.delete(`/api/users/${id}`);
  },
  // Saves a user to the database
  saveUsers(userData) {
    return axios.post("/api/users", userData);
  }
};
