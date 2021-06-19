import { MessageEmbed } from 'discord.js';
import { reply } from '../helpers/reply';

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

      default:
        break;
    }
  });
};

export default resolveSlashCommands;
