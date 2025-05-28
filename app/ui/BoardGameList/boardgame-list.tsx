import BoardGameItem from '../BoardGameItem/boardgame-item'
import { recentlyAddedGames } from '@/app/lib/utils/queries'

export default async function BoardGameList() {
  const boardgames = await recentlyAddedGames()
  return (
    <div className='flex h-auto justify-between border-2 border-black'>
      {boardgames?.map(game => (
        <BoardGameItem
          key={game._id as string}
          title={game.title}
          description={game.description}
          min_players={game.min_players}
          max_players={game.max_players}
          min_playing_time={game.min_playing_time}
          max_playing_time={game.max_playing_time}
          min_age={game.min_age}
          max_age={game.max_age}
          image={game.image}
        />
      ))}
    </div>
  )
}
