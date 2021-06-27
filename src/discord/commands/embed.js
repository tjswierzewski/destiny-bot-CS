import InteractionResponse from '../../lib/InteractionResponse';
import discordPayloadConverter from '../helpers/discordPayloadConverter';

const embed = (data) => {
  const { user, age } = discordPayloadConverter(data.options);
  return new InteractionResponse({ embeds: [{ title: age, author: { name: user } }] });
};

export default embed;
