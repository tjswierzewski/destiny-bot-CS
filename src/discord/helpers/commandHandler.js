import embed from '../commands/embed';
import ping from '../commands/ping';
import postVideo from '../commands/postVideo';

const commandHandler = (data) => {
  switch (data.name) {
    case 'ping':
      return ping();

    case 'embed':
      return embed(data);

    case 'postvideo':
      postVideo();
      return null;

    default:
      return null;
  }
};

export default commandHandler;
