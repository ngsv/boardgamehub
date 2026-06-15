import mongoose from 'mongoose'
import type { BoardGame as BoardGameType } from '../definitions'

const boardGameSchema = new mongoose.Schema<BoardGameType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    year_released: { type: Number, required: true },
    min_players: { type: Number, required: true },
    max_players: { type: Number },
    min_playing_time: { type: Number, required: true },
    max_playing_time: { type: Number },
    min_age: { type: Number, required: true },
    max_age: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date }
  },
  { timestamps: true } // Adds a 'createdAt' and 'updatedAt' property to the schema
)

boardGameSchema.index({ title: 1, description: 1 }, { unique: true }) // unique title + description combo

export const BoardGame =
  mongoose.models.BoardGame ||
  mongoose.model<BoardGameType>('BoardGame', boardGameSchema)
