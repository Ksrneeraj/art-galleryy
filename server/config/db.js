import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI = "mongodb://localhost:27017/art_gallary";

const uri = process.env.MONGODB_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB.', err));

const db = mongoose.connection;
export default db;
