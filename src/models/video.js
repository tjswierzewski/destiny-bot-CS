import { model, Schema } from 'mongoose';

const videoSchmea = new Schema(
  {
    title: String,
    videoId: {
      type: String,
      set: (url) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
        return false;
      },
    },
  },
  { timestamps: { createdAt: 'created_at' } },
);

const Video = model('Video', videoSchmea);

export default Video;
