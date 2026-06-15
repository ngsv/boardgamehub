import { BoardGame } from '../definitions'

//
export const normalize = (boardgame: BoardGame) => {
  return {
    ...boardgame,
    _id: boardgame._id.toString()
  }
}
