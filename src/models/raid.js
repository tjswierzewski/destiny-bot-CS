import { model, Schema } from 'mongoose';

const encounterSchema = new Schema({ name: String });

const raidSchema = new Schema(
  {
    title: String,
    encounters: [encounterSchema],
  },
  { timestamps: { createdAt: 'created_at' } },
);

const Raid = model('Raid', raidSchema);

export default Raid;
