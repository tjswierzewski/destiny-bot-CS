import { model, Schema } from 'mongoose';

const videoSchmea = new Schema({
  title: String,
  URL: String,
});

const Video = model('Video', videoSchmea);

export default Video;
