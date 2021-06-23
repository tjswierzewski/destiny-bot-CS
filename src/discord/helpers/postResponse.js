import axios from 'axios';

const config = { headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` } };
const postResponse = (url, payload) => axios.post(url, payload, config);

export default postResponse;
