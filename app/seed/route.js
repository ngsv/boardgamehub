import bcrypt from 'bcryptjs'
import { connectToDatabase } from '../lib/mongoose'
import { users, boardGames } from '../lib/initial-data'
import { User } from '../lib/models/user'
import { BoardGame } from '../lib/models/board-games'

async function seedUsers() {
  try {
    await connectToDatabase()

    // Hash user passwords and prepare the new user data
    const hashedUsers = await Promise.all(
      users.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return {
          ...user,
          password: hashedPassword
        }
      })
    )

    const result = await User.insertMany(hashedUsers)

    console.log(
      `Inserted ${result.length} records into the "users" collection.`
    )
  } catch (e) {
    console.error('Error during seeding the "users" collection', e)
    throw e
  }
}

async function seedBoardGames() {
  try {
    await connectToDatabase()

    const result = await BoardGame.insertMany(boardGames)

    console.log(
      `Inserted ${result.length} records into the "boardGames" collection.`
    )
  } catch (e) {
    console.error('Error during seeding the "boardGames" collection', e)
    throw e
  }
}

export async function GET() {
  try {
    await seedUsers()
    await seedBoardGames()

    return new Response(
      JSON.stringify({ message: 'Database seeded successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Seeding failed.', details: e.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
