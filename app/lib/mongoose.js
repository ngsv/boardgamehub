import mongoose from 'mongoose'

const URI = process.env.MONGODB_URI

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env')
}

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }
    await mongoose.connect(URI)

    console.log('Connected to MongoDB Atlas!')
  } catch (e) {
    console.error(e)
  }
}
