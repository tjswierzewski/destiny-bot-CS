import InteractionResponse from '../../lib/InteractionResponse';
import discordPayloadConverter from './discordPayloadConverter';

const commandHandler = (data) => {
  switch (data.name) {
    case 'ping':
      return new InteractionResponse({ content: 'hello world' });

    case 'embed':
      const { user, age } = discordPayloadConverter(data.options);
      return new InteractionResponse({ embeds: [{ title: age, author: { name: user } }] });

    default:
      return null;
  }
};

export default commandHandler;
