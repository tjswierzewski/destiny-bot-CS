import { APIMessage } from 'discord.js';

export const createAPIMessage = async (client, interaction, content) => {
  const { data, files } = await APIMessage.create(
    client.channels.resolve(interaction.channel_id),
    content
  )
    .resolveData()
    .resolveFiles();

  return { ...data, files };
};
