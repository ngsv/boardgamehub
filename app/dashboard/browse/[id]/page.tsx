import Image from 'next/image'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { ClockIcon } from '@heroicons/react/24/outline'

import { gameById } from '@/app/lib/utils/queries'
import Breadcrumbs from '@/app/ui/breadcrumbs'

export default async function GamePage(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const id = params.id

  const game = await gameById(id)
  console.log(game)

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Browse', href: '/dashboard/browse' },
          {
            label: `${game.title}`,
            href: `/dashboard/browse/${game.id}`,
            active: true
          }
        ]}
      />
      <div className='h-full w-full rounded-lg bg-slate-50 p-7'>
        <div className='flex'>
          <div className='relative h-52 w-52'>
            <Image
              src={game.image}
              alt={`Image of ${game.title}`}
              fill
              className='rounded-lg'
            />
          </div>
          <div className='flex flex-col px-7 pt-5'>
            <h1 className='text-2xl font-semibold'>{game.title}</h1>
            <div className='mt-3'>
              <span className='mb-1 flex items-center'>
                <UserGroupIcon className='inline w-3 lg:w-5' />:{' '}
                {game.min_players}-{game.max_players}
              </span>
              {game.max_playing_time ? (
                <span className='mb-1 flex'>
                  <ClockIcon className='w-3 lg:w-5' />: {game.min_playing_time}-
                  {game.max_playing_time} min
                </span>
              ) : (
                <span className='mb-1 flex'>
                  <ClockIcon className='w-3 lg:w-5' />: {game.min_playing_time}+
                </span>
              )}
              {game.max_age ? (
                <span>
                  Age: {game.min_age}-{game.max_age}
                </span>
              ) : (
                <span>Age: {game.min_age}+</span>
              )}
            </div>
          </div>
        </div>
        <hr className='my-4 h-1 border-0 bg-gray-200'></hr>
        <h2 className='text-lg font-semibold'>Description</h2>
        <hr className='my-2 h-px border-0 bg-gray-200'></hr>
        <p className=''>{game.description}</p>
      </div>
    </div>
  )
}
