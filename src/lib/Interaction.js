import commandHandler from '../discord/helpers/commandHandler';

class Interaction {
  constructor({ application_id, channel_id, data, guild_id, id, member, token, type, version }) {
    this.application_id = application_id;
    this.channel_id = channel_id;
    this.command = { name: data.name, id: data.id };
    this.data = data.options;
    this.guild_id = guild_id;
    this.id = id;
    this.member = member;
    this.token = token;
    this.type = type;
    this.version = version;
    this.url = `https://discord.com/api/v9/interactions/${id}/${token}/callback`;
  }

  respond() {
    commandHandler(this.command, this.url, this.data);
  }
}
export default Interaction;
