import InteractionResponse from '../../lib/InteractionResponse';
import Message from '../../lib/Message';

const ping = (url) => {
  const message = new Message();
  message.content = 'pong';
  new InteractionResponse(url, message.apiMessage()).post();
};

export default ping;
