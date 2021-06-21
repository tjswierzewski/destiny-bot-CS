import { MessageEmbed } from 'discord.js';
import reply from '../../helpers/reply';
import Video from '../../models/video';

const getVideos = async (client, interaction) => {
  const videos = await Video.find();
  const embed = new MessageEmbed().setTitle('Guide');
  embed.setThumbnail(`http://img.youtube.com/vi/${videos[0].videoId}/0.jpg`);
  videos.forEach(({ title, videoId }) => {
    embed.addField('Title', title);
    embed.addField('URL', `https://www.youtube.com/watch?v=${videoId}`);
  });

  reply(client, interaction, embed);
};

export default getVideos;
