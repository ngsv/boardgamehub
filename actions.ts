'use server'

import mongoose from 'mongoose'
import { AuthError } from 'next-auth'

import { signIn } from '@/auth'

import { getUser, insertUser } from './app/lib/utils/queries'

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function registerUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const filteredObject = Object.fromEntries(
      [...formData.entries()].filter(([key]) => !key.startsWith('$ACTION'))
    )
    const newEmail = filteredObject.email as string
    const user = await getUser(newEmail)
    if (user instanceof mongoose.Document) {
      return 'Email address already exists.'
    }
    // Insert into database if email doesn't exist
    await insertUser(formData)
  } catch (error) {
    console.error('Registration error: ' + error)
    return 'Something went wrong during registration.'
  }
}
