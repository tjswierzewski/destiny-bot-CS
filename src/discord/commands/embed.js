import Embed from '../../lib/Embed';
import InteractionResponse from '../../lib/InteractionResponse';
import Message from '../../lib/Message';
import discordPayloadConverter from '../helpers/discordPayloadConverter';

const embed = (url, data) => {
  const { user, age } = discordPayloadConverter(data);
  const response = new Message();
  const embedObject = new Embed();
  embedObject.addField('User', user, false);
  embedObject.addField('Age', age, false);
  response.addEmbed(embedObject);
  return new InteractionResponse(url, response.apiMessage()).post();
};

export default embed;
