import Image from 'next/image'

type BoardGameTableItemProps = {
  title: string
  image: string
}

export default function BoardGameTableItem({
  title,
  image
}: BoardGameTableItemProps) {
  return (
    <div className='my-1 flex flex-col font-medium'>
      <div className='flex items-center'>
        <div className='relative h-24 w-24'>
          <Image
            src={image}
            alt={`Image of ${title}`}
            fill
            className='object-cover'
          />
        </div>
        <span className='ml-4'>{title}</span>
      </div>
      <hr className='mx-2 mt-1 h-px border-0 bg-slate-300' />
    </div>
  )
}
