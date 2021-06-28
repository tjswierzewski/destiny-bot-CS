import axios from 'axios';
import { printIncoming } from './print';

const deleteReaction = (emoji, { message_id, channel_id, user_id }) => {
  const url = `https://discord.com/api/v9/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/${user_id}`;
  axios.delete(url, { headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` } }).catch((error) => {
    printIncoming(error);
  });
};

export default deleteReaction;
