import bcrypt from 'bcryptjs'
import { connectToDatabase } from '../../lib/mongoose'
import { User } from '../../lib/models/user'
import { users } from '../../lib/initial-data'

export async function seedUsers() {
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

    return {
      success: true,
      message: `✅ Inserted ${result.length} records into the 'users' collection.`
    }
  } catch (e) {
    console.error('Error during seeding the "users" collection', e)
    return { success: false, error: e.message }
  }
}
