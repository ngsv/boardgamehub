import mongoose from 'mongoose'

const boardGameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  min_players: { type: Number, required: true },
  max_players: { type: Number },
  min_playing_time: { type: Number, required: true },
  max_playing_time: { type: Number },
  min_age: { type: Number, required: true },
  max_age: { type: Number }
})

boardGameSchema.index({ title: 1, description: 1 }, { unique: true }) // unique title + description combo

export const BoardGame = mongoose.model('BoardGame', boardGameSchema)
