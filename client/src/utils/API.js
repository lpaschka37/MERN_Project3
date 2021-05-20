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
  },
  loginUser(userData) {
    return axios.post("/api/users/login", userData);
  },

  // Gets all Products
  async getProducts() {
    console.log("api here");
    const dataGet = await axios.get("/api/products");
    console.log("API:", dataGet);
    return dataGet;
  },

  async getProductsByCategory(category) {
    console.log("getting Cateogry");
    const dataGet = await axios.get(`/api/products/category/${category}`);
    console.log("API:Category", dataGet);
    return dataGet;
  },

  async getProductsById(id) {
    console.log("getting Product by Id");
    const dataGet = await axios.get(`/api/products/${id}`);
    console.log("API:Id", dataGet);
    return dataGet;
  },

  async updateRating(productId, givenRate) {
    const dataGet = await axios.post(`/api/products/ratings/${productId}`, {
      rate: givenRate,
    });
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
