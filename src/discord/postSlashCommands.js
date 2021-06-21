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
    await getApp(CSId).commands.post({
      data: {
        name: 'postvideo',
        description: 'Add Guide Video',
        options: [
          {
            name: 'title',
            description: 'Title of guide',
            required: true,
            type: 3,
          },
          {
            name: 'url',
            description: 'Video url',
            required: true,
            type: 3,
          },
        ],
      },
    });
    await getApp(CSId).commands.post({
      data: {
        name: 'getvideos',
        description: 'Show all videos',
      },
    });
  });
};

export default postSlashCommands;
