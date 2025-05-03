import { connectToDatabase } from '../../lib/mongoose'
import { User } from '../../lib/models/user'

// mongoose
export async function GET() {
  try {
    await connectToDatabase()

    const results = await User.find({}).limit(10)

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500
    })
  }
}
