import messageEmitter from '../../events/messageEmitter';
import reactionEmitter from '../../events/reactionEmitter';
import Embed from '../../lib/Embed';
import InteractionResponse from '../../lib/InteractionResponse';
import Message from '../../lib/Message';
import Raid from '../../models/raid';
import addReaction from '../helpers/addReaction';
import deleteReaction from '../helpers/deleteReaction';
import { printIncoming } from '../helpers/print';

const postVideo = async (url) => {
  let raidObject = {};
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
  reactionEmitter.on('userReaction', (reaction) => {
    const selectedRaid = raids.find((raid) => raid.emoji === reaction.emoji.name);
    raidObject = { ...raidObject, raid: selectedRaid.title };
    deleteReaction(selectedRaid.encodedEmoji, reaction);
    printIncoming(raidObject);
  });
};

export default postVideo;
