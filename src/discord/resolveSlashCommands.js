import { MessageEmbed } from 'discord.js';
import _ from 'lodash';
import discordPayloadConverter from '../helpers/discordPayloadConverter';
import reply from '../helpers/reply';
import Video from '../models/video';
import getVideos from './commands/getVideos';

const keyMapping = {
  title: 'title',
  url: 'videoId',
};

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
          let payload = discordPayloadConverter(options);
          payload = _(payload)
            .mapKeys((__, k) => keyMapping[k])
            .value();
          const video = new Video(payload);
          video.save((err, model) => {
            if (err) {
              reply(client, interaction, err);
            }
            reply(client, interaction, `${model.title} has been added`);
          });
        }
        break;
      case 'getvideos':
        getVideos(client, interaction);
        break;
      default:
        break;
    }
  });
};

export default resolveSlashCommands;
