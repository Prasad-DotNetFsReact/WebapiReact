import axios from 'axios';

const API_URL = 'https://localhost:7033/api/Publisher';



const getPublishers = () => axios.get(API_URL);
const getPublisherById = (id) => axios.get(`${API_URL}/${id}`);
const addPublisher = (publisher) => axios.post(API_URL, publisher);
const updatePublisher = (id, publisher) => axios.put(`${API_URL}/${id}`, publisher);
const deletePublisher = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getPublishers,
  getPublisherById,
  addPublisher,
  updatePublisher,
  deletePublisher,
};
