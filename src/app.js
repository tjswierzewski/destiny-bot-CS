import { Client } from 'discord.js';
import { connect, connection } from 'mongoose';
import postSlashCommands from './discord/postSlashCommands';
import resolveSlashCommands from './discord/resolveSlashCommands';

connect('mongodb://localhost:27017/destiny-bot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const CSId = '831880241310990357';
  const client = new Client();

  postSlashCommands(client, CSId);
  resolveSlashCommands(client);
  client.login(process.env.BOT_TOKEN);
});
