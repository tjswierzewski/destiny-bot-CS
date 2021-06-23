import postResponse from './postResponse';

const postSlashCommand = (command) => {
  const guildId = '831880241310990357';
  const url = `https://discord.com/api/v9/applications/${process.env.APPLICATION_ID}/guilds/${guildId}/commands`;
  postResponse(url, command);
};
export default postSlashCommand;
