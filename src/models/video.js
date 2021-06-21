import { model, Schema } from 'mongoose';

const videoSchmea = new Schema(
  {
    title: String,
    URL: String,
  },
  { timestamps: { createdAt: 'created_at' } },
);

const Video = model('Video', videoSchmea);

export default Video;
