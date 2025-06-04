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
    <>
      <td className='relative h-32 w-32'>
        <Image
          src={image}
          alt={`Image of ${title}`}
          fill
          className='rounded-xl object-cover p-2'
        />
      </td>
      <td className='pl-4'>
        <span className='font-medium hover:cursor-pointer hover:underline'>
          {title}
        </span>
      </td>
    </>
  )
}
