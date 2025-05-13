import { ObjectId } from 'mongodb'

export type User = {
  _id: ObjectId // MongoDB auto-generated
  username: string
  password: string
  first_name: string
  last_name: string
  email: string
}
