import postResponse from '../discord/helpers/postResponse';

class InteractionResponse {
  constructor(url, response) {
    this.type = 4;
    this.data = response;
    this.url = url;
  }

  post() {
    postResponse(this.url, { type: this.type, data: this.data });
  }
}

export default InteractionResponse;
