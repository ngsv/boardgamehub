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
      <td className='relative h-24 w-24'>
        <Image
          src={image}
          alt={`Image of ${title}`}
          fill
          className='rounded-lg object-cover'
        />
      </td>
      <td className='pl-4'>{title}</td>
    </>
  )
}
