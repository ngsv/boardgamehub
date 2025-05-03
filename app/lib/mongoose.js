import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Missing MongoDB URI. Please add it to your .env file')
}

let cached = global.mongoose || { conn: null, promise: null }

export async function connectToDatabase() {
  if (cached.conn) {
    console.log('🔄 Using existing database connection.')
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then(mongooseInstance => {
        console.log('✅ New MongoDB Atlas connection establed.')
        return mongooseInstance
      })
      .catch(error => {
        console.error('❌ Error connecting to MongoDB Atlas.')
        throw error
      })
  }

  cached.conn = await cached.promise
  global.mongoose = cached

  return cached.conn
}

// export async function connectToDatabase() {
//   try {
//     if (mongoose.connection.readyState >= 1) {
//       return
//     }
//     await mongoose.connect(URI)

//     console.log('Connected to MongoDB Atlas!')
//   } catch (e) {
//     console.error(e)
//   }
// }
