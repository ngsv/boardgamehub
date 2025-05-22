'use server'

import mongoose from 'mongoose'
import { AuthError } from 'next-auth'

import { signIn } from '@/auth'

import {
  getUserByEmail,
  getUserByUsername,
  insertUser
} from './app/lib/utils/queries'

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
    // Checks if email address exists
    const newEmail = filteredObject.email as string
    let user = await getUserByEmail(newEmail)
    if (user instanceof mongoose.Document) {
      return 'Email address already exists.'
    }
    // Checks if username exists
    const newUsername = filteredObject.username as string
    user = await getUserByUsername(newUsername)
    if (user instanceof mongoose.Document) {
      return 'Username already exists.'
    }
    // Insert into database if email doesn't exist
    await insertUser(formData)
  } catch (error) {
    console.error('Registration error: ' + error)
    return 'Something went wrong during registration.'
  }
}
