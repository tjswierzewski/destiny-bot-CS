import embed from '../commands/embed';
import ping from '../commands/ping';
import postVideo from '../commands/postVideo';

const commandHandler = (command, url, data) => {
  switch (command.name) {
    case 'ping':
      ping(url);
      break;
    case 'embed':
      embed(url, data);
      break;
    case 'postvideo':
      postVideo(url);
      break;

    default:
      break;
  }
};

export default commandHandler;
