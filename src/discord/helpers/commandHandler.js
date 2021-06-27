import embed from '../commands/embed';
import ping from '../commands/ping';
import postVideo from '../commands/postVideo';

const commandHandler = (command, url, data) => {
  switch (command.name) {
    case 'ping':
      return ping(url);

    case 'embed':
      return embed(url, data);

    case 'postvideo':
      postVideo(url);
      return null;

    default:
      return null;
  }
};

export default commandHandler;
