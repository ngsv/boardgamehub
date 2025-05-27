type BoardGameItemProps = {
  title: string
  description: string
  min_players: number
  max_players: number
  min_playing_time: number
  max_playing_time: number
  min_age: number
  max_age: number
}

export default async function BoardGameItem({
  title,
  // description,
  min_players,
  max_players,
  min_playing_time,
  max_playing_time,
  min_age,
  max_age
}: BoardGameItemProps) {
  return (
    <div className='flex flex-col border-2 border-orange-200'>
      <h2>{title}</h2>
      <span>{min_players}</span>
      <span>{max_players}</span>
      <span>{min_playing_time}</span>
      <span>{max_playing_time}</span>
      <span>{min_age}</span>
      <span>{max_age}</span>
    </div>
  )
}
