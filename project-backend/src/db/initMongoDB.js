import mongoose from 'mongoose';


const initMongoDB = async () => {
  try {
    const DB_HOST =
      'mongodb+srv://Nazar:KWOEQCgRUWfNmuJ6@cluster0.pgbwyds.mongodb.net/my-movies?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(DB_HOST);
    console.log('DB conection success');
  } catch (error) {
    console.log(`Error connect to database ${error.message}`);
    throw error;
  }
};

export default initMongoDB;
