import messageEmitter from '../../events/messageEmitter';
import Embed from '../../lib/Embed';
import InteractionResponse from '../../lib/InteractionResponse';
import Message from '../../lib/Message';
import Raid from '../../models/raid';
import addReaction from '../helpers/addReaction';

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
  messageEmitter.on('botCreate', (message) => {
    raids.forEach((raid, index) => {
      setTimeout(() => {
        addReaction(raid.encodedEmoji, message);
      }, index * 300);
    });
  });
};

export default postVideo;
