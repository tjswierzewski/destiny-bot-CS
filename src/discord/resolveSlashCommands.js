import { MessageEmbed } from 'discord.js';
import discordPayloadConverter from '../helpers/discordPayloadConverter';
import { reply } from '../helpers/reply';
import Video from '../models/video';

const resolveSlashCommands = (client) => {
  client.ws.on('INTERACTION_CREATE', async (interaction) => {
    const { name, options } = interaction.data;

    const command = name.toLowerCase();

    switch (command) {
      case 'ping':
        reply(client, interaction, 'hello world');
        break;

      case 'embed':
        {
          const embed = new MessageEmbed().setTitle('Test');
          options.forEach(({ name, value }) => {
            embed.addField(name, value);
          });

          reply(client, interaction, embed);
        }
        break;

      case 'postvideo':
        {
          const payload = discordPayloadConverter(options);
          const video = new Video(payload);
          video.save((err, video) => {
            if (err) {
              console.error(err);
            }
            reply(client, interaction, `${video.title} has been added`);
          });
        }
        break;
      default:
        break;
    }
  });
};

export default resolveSlashCommands;
