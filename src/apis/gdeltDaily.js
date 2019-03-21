import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.gdeltproject.org/api/v2/geo/geo'
})
