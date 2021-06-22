import axios from 'axios';

const postResponse = (url, payload) => axios.post(url, payload);

export default postResponse;
