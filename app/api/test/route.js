import { connectToDatabase } from '../../../lib/mongodb'

export async function GET(request) {
  try {
    const { mongoClient } = await connectToDatabase()
    const db = mongoClient.db('sample_restaurants') // db name
    const collection = db.collection('restaurants') // table
    const results = await collection.find({}).limit(10).toArray()

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500
    })
  }
}
