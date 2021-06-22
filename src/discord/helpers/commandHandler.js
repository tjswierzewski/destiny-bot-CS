import discordPayloadConverter from './discordPayloadConverter';

const commandHandler = (data) => {
  switch (data.name) {
    case 'ping':
      return { type: 4, data: { content: 'hello world' } };

    case 'embed':
      const { user, age } = discordPayloadConverter(data.options);
      return { type: 4, data: { embeds: [{ title: age, author: { name: user } }] } };

    default:
      return null;
  }
};

export default commandHandler;
