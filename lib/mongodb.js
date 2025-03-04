import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

let mongoClient // cached connection

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env')
}

export async function connectToDatabase() {
  try {
    if (mongoClient) {
      return { mongoClient }
    }
    mongoClient = await new MongoClient(URI, options).connect()
    console.log('Connected to MongoDB Atlas!')
    return { mongoClient }
  } catch (e) {
    console.error(e)
  }
}
