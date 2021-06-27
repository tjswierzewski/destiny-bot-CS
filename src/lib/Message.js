class Message {
  constructor() {
    this.id = null;
    this.channel_id = null;
    this.guild_id = null;
    this.author = null;
    this.member = null;
    this.content = null;
    this.timestamp = null;
    this.edited_timestamp = null;
    this.tts = null;
    this.mention_everyone = null;
    this.mentions = null;
    this.mention_roles = null;
    this.mention_channels = null;
    this.attachments = null;
    this.embeds = null;
    this.reactions = null;
    this.nonce = null;
    this.pinned = null;
    this.webhook_id = null;
    this.type = null;
    this.activity = null;
    this.application = null;
    this.application_id = null;
    this.message_reference = null;
    this.flags = null;
    this.stickers = null;
    this.referenced_message = null;
    this.interaction = null;
    this.thread = null;
    this.components = null;
  }

  addEmbed(embed) {
    if (this.embeds === null) {
      this.embeds = [];
    }
    this.embeds.push(embed);
  }

  apiMessage() {
    let message = {
      tts: this.tts,
      message_reference: this.message_reference,
      components: this.components,
    };
    if (this.embeds) {
      message = { ...message, embeds: this.embeds };
    }
    if (this.content) {
      message = { ...message, content: this.content };
    }
    if (this.file) {
      message = { ...message, file: this.file };
    }
    return message;
  }
}

export default Message;
