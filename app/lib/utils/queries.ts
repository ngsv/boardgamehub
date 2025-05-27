import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { connectToDatabase } from '../mongoose'
import { User as UserModel } from '../models/user'
import { BoardGame } from '../models/boardgames'
import { User } from '../definitions'

// Checks if a user already exists with that email address
export async function getUserByEmail(
  email: string
): Promise<User | null | undefined> {
  try {
    await connectToDatabase()
    const user = await UserModel.findOne({ email: email })
    return user
  } catch (error) {
    console.error(
      'Error fetching user with email address ' + email + ': ' + error
    )
  }
}

// Checks if a user already exists with that username
export async function getUserByUsername(
  username: string
): Promise<User | null | undefined> {
  try {
    await connectToDatabase()
    const user = await UserModel.findOne({ username: username })
    return user
  } catch (error) {
    console.error(
      'Error fetching user with username ' + username + ': ' + error
    )
  }
}

// Insert user into DB
export async function insertUser(formData: FormData) {
  try {
    await connectToDatabase()

    const filteredObject = Object.fromEntries(
      [...formData.entries()].filter(([key]) => !key.startsWith('$ACTION'))
    )

    const schemaRegister = z.object({
      firstName: z.string(),
      lastName: z.string(),
      username: z
        .string()
        .min(4, { message: 'Username must be between 4 and 20 characters.' })
        .max(20, { message: 'Username must be between 4 and 20 characters.' }),
      email: z.string().email(),
      password: z
        .string()
        .min(8, { message: 'Password must be between 8 and 100 characters.' })
        .max(100, { message: 'Password must be between 8 and 100 characters.' })
    })
    const parsedCredentials = schemaRegister.safeParse({ ...filteredObject })

    // Insert user into DB if credentials are valid
    if (parsedCredentials.success) {
      const hashedpassword = await bcrypt.hash(
        filteredObject.password as string,
        10
      )
      const newUser = {
        first_name: filteredObject.firstName,
        last_name: filteredObject.lastName,
        username: filteredObject.username,
        email: filteredObject.email,
        password: hashedpassword
      }
      console.log(newUser)
      await UserModel.insertOne({ ...newUser })
    }
  } catch (error) {
    console.error('Error inserting user into database: ' + error)
    throw error
  }
}

// Recently added board games
// export async function recentlyAddedGames() {
//   try {
//     await connectToDatabase()
//     let recentGames = await BoardGame.find({})
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .lean()

//     recentGames = JSON.parse(JSON.stringify(recentGames))
//     // console.log(recentGames)
//     // console.log(Array.isArray(recentGames))
//     return recentGames
//   } catch (error) {
//     console.error(error)
//   }
// }

// Staff's picks board games
