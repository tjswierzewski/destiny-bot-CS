import axios from 'axios';
import { printIncoming } from './print';

const addReaction = (emoji, { id, channel_id }) => {
  const url = `https://discord.com/api/v9/channels/${channel_id}/messages/${id}/reactions/${emoji}/@me`;
  axios
    .put(url, null, { headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` } })
    .catch((error) => {
      printIncoming(error);
    });
};

export default addReaction;
