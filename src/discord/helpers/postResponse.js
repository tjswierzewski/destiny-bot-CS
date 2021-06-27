import axios from 'axios';
import { printIncoming } from './print';

const config = { headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` } };
const postResponse = (url, payload) => {
  axios.post(url, payload, config).catch((error) => {
    printIncoming(error);
  });
};

export default postResponse;
