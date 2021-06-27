class Embed {
  constructor() {
    this.title = null;
    this.type = null;
    this.description = null;
    this.url = null;
    this.timestamp = null;
    this.color = null;
    this.footer = null;
    this.image = null;
    this.thumbnail = null;
    this.video = null;
    this.provider = null;
    this.author = null;
    this.fields = null;
  }

  addField(name, value, inline) {
    if (this.fields === null) {
      this.fields = [];
    }
    this.fields.push({ name, value, inline });
  }

  removeField(name) {
    this.fields = this.fields.filter((field) => field.name === name);
  }

  author(name = null, url = null, icon_url = null, proxy_icon_url = null) {
    this.author = {
      name,
      url,
      icon_url,
      proxy_icon_url,
    };
  }

  footer(text, icon_url = null, proxy_icon_url = null) {
    this.footer = {
      text,
      icon_url,
      proxy_icon_url,
    };
  }

  provider(name = null, url = null) {
    this.provider = {
      name,
      url,
    };
  }

  image(url = null, proxy_url = null, height = null, width = null) {
    this.image = {
      url,
      proxy_url,
      height,
      width,
    };
  }

  video(url = null, proxy_url = null, height = null, width = null) {
    this.video = {
      url,
      proxy_url,
      height,
      width,
    };
  }

  thumbnail(url = null, proxy_url = null, height = null, width = null) {
    this.thumbnail = {
      url,
      proxy_url,
      height,
      width,
    };
  }
}

export default Embed;
