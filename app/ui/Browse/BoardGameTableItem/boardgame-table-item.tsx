import Image from 'next/image'
import Link from 'next/link'

type BoardGameTableItemProps = {
  id: string
  title: string
  image: string
}

export default function BoardGameTableItem({
  id,
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
          <Link href={`/dashboard/browse/${id}`}>{title}</Link>
        </span>
      </td>
    </>
  )
}
