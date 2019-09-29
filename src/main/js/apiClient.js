import axios from 'axios';

const SEARCH_URL = (name) => '/api/products/search/nameStartsWith?name=' + name;
const PRODUCT_URL = '/api/products';


const apiClient = {
  query(name) {
    name = encodeURIComponent(name);
    return axios.get(SEARCH_URL(name));
  },
  getPage(path) {
    return axios.get(path);
  },
  getProducts() {
      return axios.get(PRODUCT_URL);
  },
  getRecommendation() {
    return axios.get(PRODUCT_URL);
  },
}

window.apiClient = apiClient;
window.axios = axios;

export default apiClient;