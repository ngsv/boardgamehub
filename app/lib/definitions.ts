import { ObjectId } from 'mongodb'

export type User = {
  _id: ObjectId // MongoDB auto-generated
  username: string
  password: string
  first_name: string
  last_name: string
  email: string
}

export type BoardGame = {
  _id: string
  title: string
  description: string
  image: string
  year_released: number
  min_players: number
  max_players: number
  min_playing_time: number
  max_playing_time: number
  min_age: number
  max_age?: number
  createdAt: string
  updatedAt: string
}
