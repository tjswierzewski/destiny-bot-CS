import mongoose from 'mongoose';
import Raids from './seeders/raids.seeder';

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/destiny-bot';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  Raids,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
