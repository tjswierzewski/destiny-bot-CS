import commandHandler from './commandHandler';
import postResponse from './postResponse';

const handleInteraction = async ({ id, token, data }) => {
  const payload = commandHandler(data);
  const url = `https://discord.com/api/v9/interactions/${id}/${token}/callback`;
  postResponse(url, payload);
};
export default handleInteraction;
