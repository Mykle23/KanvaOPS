import mongoose from 'mongoose';

export const dbConnect = () => {
  const mongoUser = process.env.DB_USER;
  const mongoPasswd = process.env.DB_PASSWD;
  const mongoHost = process.env.DB_HOST;
  const mongoPort = process.env.DB_PORT;
  const mongoDb = process.env.DB_NAME;
  const mongoOptions = process.env.DB_OPTIONS ? `?${process.env.DB_OPTIONS}` : '';
  const mongoUri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/`;
  return mongoose.connect(mongoUri);
};
