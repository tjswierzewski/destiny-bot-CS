const discordPayloadConverter = (payload) => {
  let output = {};
  payload.forEach(({ name, value }) => {
    output = { ...output, [name]: value };
  });
  return output;
};

export default discordPayloadConverter;
