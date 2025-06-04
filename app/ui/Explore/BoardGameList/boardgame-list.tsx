import BoardGameItem from '../BoardGameItem/boardgame-item'
import { recentlyAddedGames, staffPicks } from '@/app/lib/utils/queries'

type BoardGameListProps = {
  list: string
}

export default async function BoardGameList({ list }: BoardGameListProps) {
  let boardgames
  if (list == 'recent') {
    boardgames = await recentlyAddedGames()
  } else if (list == 'staff') {
    boardgames = await staffPicks()
  }

  return (
    <div className='flex h-auto justify-between'>
      {boardgames?.map(game => (
        <BoardGameItem
          key={game._id as string}
          id={game._id as string}
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
