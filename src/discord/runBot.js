import { Client } from 'discord.js';
import postSlashCommands from './postSlashCommands';
import resolveSlashCommands from './resolveSlashCommands';

const CSId = '831880241310990357';
const client = new Client();

const runBot = () => {
  postSlashCommands(client, CSId);
  resolveSlashCommands(client);
  client.login(process.env.BOT_TOKEN);
};

export default runBot;
