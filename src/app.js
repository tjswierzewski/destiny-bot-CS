import { Client } from 'discord.js';
import postSlashCommands from './discord/postSlashCommands';
import resolveSlashCommands from './discord/resolveSlashCommands';

const CSId = '831880241310990357';
const client = new Client();

postSlashCommands(client, CSId);
resolveSlashCommands(client);
client.login(process.env.BOT_TOKEN);
