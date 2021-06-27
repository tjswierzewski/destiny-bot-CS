import Interaction from '../../lib/Interaction';

const handleInteraction = async (interactionPayload) => {
  const interaction = new Interaction(interactionPayload);
  interaction.respond();
};
export default handleInteraction;
