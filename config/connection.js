const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const DB_URL =
  process.env.MONGO_URL ||
  'mongodb+srv://mialupin52:QdS5w4K1Qoy55Pg0@mealapp.nnr1srs.mongodb.net/?retryWrites=true&w=majority';
// const DB_URL = 'mongodb://localhost:27017/meal-planning-app';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

function fetchImageById(imageId) {
  const conn = mongoose.connection;
  const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    chunkSizeBytes: 262144,
    bucketName: 'uploads',
  });

  if (!ObjectId.isValid(imageId)) {
    imageId = new ObjectId(imageId);
  }

  return new Promise((resolve, reject) => {
    const chunks = [];
    const readStream = bucket.openDownloadStream(imageId);

    readStream.on('data', (chunk) => {
      chunks.push(chunk);
    });

    readStream.on('end', () => {
      const imageBuffer = Buffer.concat(chunks);
      resolve(imageBuffer);
    });

    readStream.on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = {
  connectToDatabase,
  fetchImageById,
};
