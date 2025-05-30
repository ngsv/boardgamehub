'use client'

import Image from 'next/image'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { ClockIcon } from '@heroicons/react/24/outline'

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
    <div className='flex w-1/5 max-w-72 flex-col rounded-xl p-2 text-xs hover:cursor-pointer hover:bg-slate-300 lg:text-base'>
      <div className='relative h-24 w-full md:h-28 lg:h-40 xl:h-60'>
        <Image
          src={image}
          alt={`Image of ${image}`}
          fill
          className='rounded-lg object-cover'
        />
      </div>
      <h2 className='mt-2 font-medium'>{title}</h2>
      <span className='flex items-center'>
        <UserGroupIcon className='inline w-3 lg:w-5' />: {min_players}-
        {max_players}
      </span>
      {max_playing_time ? (
        <span className='flex'>
          <ClockIcon className='w-3 lg:w-5' />: {min_playing_time}-
          {max_playing_time} min
        </span>
      ) : (
        <span className='flex'>
          <ClockIcon className='w-3 lg:w-5' />: {min_playing_time}+
        </span>
      )}
      {max_age ? (
        <span>
          Age: {min_age}-{max_age}
        </span>
      ) : (
        <span>Age: {min_age}+</span>
      )}
    </div>
  )
}
