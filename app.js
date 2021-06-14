const Discord = require('discord.js');

const CSId = '831880241310990357';
const client = new Discord.Client();

const getApp = (guildId) => {
  const app = client.api.applications(client.user.id);
  if (guildId) {
    app.guilds(guildId);
  }
  return app;
};

client.once('ready', async () => {
  await getApp(CSId).commands.post({
    data: {
      name: 'ping',
      description: 'Hello World',
    },
  });

  await getApp(CSId).commands.post({
    data: {
      name: 'embed',
      description: 'embeded',
      options: [
        {
          name: 'user',
          description: 'Your name',
          required: true,
          type: 3,
        },
        {
          name: 'age',
          description: 'Your age',
          required: false,
          type: 4,
        },
      ],
    },
  });
});

const createAPIMessage = async (interaction, content) => {
  const { data, files } = await Discord.APIMessage.create(
    client.channels.resolve(interaction.channel_id),
    content
  )
    .resolveData()
    .resolveFiles();

  return { ...data, files };
};

const reply = async (interaction, response) => {
  let data = {
    content: response,
  };

  if (typeof response === 'object') {
    data = await createAPIMessage(interaction, response);
  }
  client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 4,
      data,
    },
  });
};

client.ws.on('INTERACTION_CREATE', async (interaction) => {
  const { name, options } = interaction.data;

  const command = name.toLowerCase();

  switch (command) {
    case 'ping':
      reply(interaction, 'hello world');
      break;

    case 'embed':
      {
        const embed = new Discord.MessageEmbed().setTitle('Test');
        options.forEach(({ name, value }) => {
          embed.addField(name, value);
        });

        reply(interaction, embed);
      }
      break;

    default:
      break;
  }
});

client.login(process.env.BOT_TOKEN);
