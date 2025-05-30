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
  _id: ObjectId
  title: string
  description: string
  image: string
  min_players: number
  max_players: number
  min_playing_time: number
  max_playing_time: number
  min_age: number
  max_age?: number
}
