/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets specific user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUsers: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUsers: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all Products
  getProducts: async function () {
    console.log("api here");
    const dataGet = await axios.get("/api/products");
    console.log("API:", dataGet);
    return dataGet;
  },
  getProductsByCategory: async function (category) {
    console.log("api here");
    const dataGet = await axios.get(`/api/products/${category}`);
    console.log("API:Category", dataGet);
    return dataGet;
  },
  // Gets specific product with the given id
  // getProduct: function(id) {
  //   return axios.get("/api/products/" + id);
  // },
  // // Deletes the product with the given id
  // deleteProducts: function(id) {
  //   return axios.delete("/api/products/" + id);
  // },
  // // Saves a product to the database
  // saveProducts: function(productData) {
  //   return axios.post("/api/products", productData);
  // }
};
