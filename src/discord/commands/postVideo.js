import Embed from '../../lib/Embed';
import InteractionResponse from '../../lib/InteractionResponse';
import Message from '../../lib/Message';
import Raid from '../../models/raid';

const postVideo = async (url) => {
  const raidsEmbed = new Embed();
  raidsEmbed.title = 'Choose a Raid';
  const raids = await Raid.find({});
  let description = '';
  raids.forEach((raid) => {
    description += `${raid.title}: ${raid.emoji}\n\n`;
  });
  raidsEmbed.description = description;
  const message = new Message();
  message.addEmbed(raidsEmbed);
  new InteractionResponse(url, message.apiMessage()).post();
  //add emojis
};

export default postVideo;
