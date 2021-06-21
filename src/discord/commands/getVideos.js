import { MessageEmbed } from 'discord.js';
import reply from '../../helpers/reply';
import Video from '../../models/video';

const getVideos = async (client, interaction) => {
  const videos = await Video.find();
  const embed = new MessageEmbed().setTitle('Guide');
  videos.forEach(({ title, url }) => {
    embed.addField('Title', title);
    embed.addField('URL', url);
  });

  reply(client, interaction, embed);
};

export default getVideos;
