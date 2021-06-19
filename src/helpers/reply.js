import { createAPIMessage } from './createAPIMessage';

export const reply = async (client, interaction, response) => {
  let data = {
    content: response,
  };

  if (typeof response === 'object') {
    data = await createAPIMessage(client, interaction, response);
  }
  client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 4,
      data,
    },
  });
};
