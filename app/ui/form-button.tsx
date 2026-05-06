import { ArrowRightIcon } from '@heroicons/react/24/outline'

type ButtonProps = {
  buttonText: string
  className?: string
}

export default function Button({ buttonText, className }: ButtonProps) {
  return (
    <button
      className={`mt-6 flex h-11 w-full justify-between rounded-lg bg-orange-900 px-4 text-white hover:bg-orange-800 ${className}`}
    >
      <div className='flex items-center'>{buttonText}</div>
      <ArrowRightIcon className='w-5' />
    </button>
  )
}
