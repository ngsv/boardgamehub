import { connectToDatabase } from '../../lib/mongoose'
import { BoardGame } from '../../lib/models/boardgames'
import { boardGames } from '../../lib/initial-data'

export async function seedBoardGames() {
  try {
    await connectToDatabase()

    const result = await BoardGame.insertMany(boardGames)
    console.log(
      `Inserted ${result.length} records into the "boardgames" collection.`
    )
    return {
      success: true,
      message: `✅ Inserted ${result.length} records into the 'boardgames' collection.`
    }
  } catch (e) {
    console.error('Error during seeding the "users" collection', e)
    return { success: false, error: e.message }
  }
}
