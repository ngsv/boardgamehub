'use server'

import { z } from 'zod'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { connectToDatabase } from './app/lib/mongoose'
import type { User, NewUser } from './app/lib/definitions'
import { User as UserModel } from './app/lib/models/user'

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

// Checks if a user already exists with that email address
async function getUser(email: string): Promise<User | null | undefined> {
  try {
    await connectToDatabase()
    const user = await UserModel.findOne({ email: email })
    return user
  } catch (error) {
    console.error('Error fetching user with email address: ' + email)
  }
}

// Insert user into DB
async function insertUser(formData: FormData) {
  try {
    await connectToDatabase()

    let filteredObject = Object.fromEntries(
      [...formData.entries()].filter(([key]) => !key.startsWith('$ACTION'))
    )
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
  } catch (error) {
    console.error('Error inserting user into database: ' + error)
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
    insertUser(formData)
  } catch (error) {
    console.log('Registration error: ' + error)
    return 'Something went wrong during registration.'
  }
}
