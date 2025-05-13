import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { connectToDatabase } from '@/app/lib/mongoose'
import type { User } from '@/app/lib/definitions'
import { User as UserModel } from '@/app/lib/models/user'
import { authConfig } from './auth.config'

// Finds user by email
async function getUser(email: string): Promise<User | null | undefined> {
  try {
    await connectToDatabase()

    const user = UserModel.findOne({ email: email })
    return user
  } catch (error) {
    console.error('Failed to fetch user: ', error)
    throw new Error('Failed to fetch user.')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8)
          })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)

          // If user is found, check if the passwords match and return the user
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (passwordsMatch) return user
        }

        console.log('Invalid credentials.')
        return null
      }
    })
  ]
})
