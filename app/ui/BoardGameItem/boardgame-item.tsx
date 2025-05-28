'use client'

import Image from 'next/image'

type BoardGameItemProps = {
  title: string
  description: string
  min_players: number
  max_players: number
  min_playing_time: number
  max_playing_time: number
  min_age: number
  max_age: number
  image: string
}

export default function BoardGameItem({
  title,
  // description,
  min_players,
  max_players,
  min_playing_time,
  max_playing_time,
  min_age,
  max_age,
  image
}: BoardGameItemProps) {
  return (
    <div className='m-2 flex w-1/5 max-w-72 flex-col border-2 border-orange-200 p-0'>
      <div className='relative h-24 w-full md:h-28 lg:h-40 xl:h-60'>
        <Image
          src={image}
          // width={250}
          // height={500}
          alt={`Image of ${image}`}
          fill
          className='rounded-lg object-cover'
        />
      </div>
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
