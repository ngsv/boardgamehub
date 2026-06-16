import Image from 'next/image'
import Link from 'next/link'

type BoardGameTableItemProps = {
  id: string
  title: string
  image: string
  index: number
}

export default function BoardGameTableItem({
  id,
  title,
  image,
  index
}: BoardGameTableItemProps) {
  return (
    <>
      <td className='relative h-32 w-32'>
        <Image
          src={image}
          alt={`Image of ${title}`}
          fill
          className='rounded-xl object-cover p-2'
          sizes='128px'
          priority={index < 7} // give priority only to the first seven images
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
