const postSlashCommands = (client, CSId) => {
  client.on('ready', async () => {
    const getApp = (guildId) => {
      const app = client.api.applications(client.user.id);
      if (guildId) {
        app.guilds(guildId);
      }
      return app;
    };

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
};

export default postSlashCommands;
