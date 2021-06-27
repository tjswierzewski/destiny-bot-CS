import InteractionResponse from '../../lib/InteractionResponse';

const ping = () => new InteractionResponse({ content: 'hello world' });

export default ping;
