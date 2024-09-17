import axios from 'axios';

const API_URL = 'https://localhost:7033/api/Author';

const authorService = {
  getAuthors: () => axios.get(API_URL),
  getAuthorById: (id) => axios.get(`${API_URL}/${id}`),
  addAuthor: (author) => axios.post(API_URL, author),
  updateAuthor: (id, author) => axios.put(`${API_URL}/${id}`, author),
  deleteAuthor: (id) => axios.delete(`${API_URL}/${id}`),
};

export default authorService;






