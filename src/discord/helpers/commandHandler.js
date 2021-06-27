import embed from '../commands/embed';
import ping from '../commands/ping';

const commandHandler = (data) => {
  switch (data.name) {
    case 'ping':
      return ping();

    case 'embed':
      return embed(data);

    default:
      return null;
  }
};

export default commandHandler;
