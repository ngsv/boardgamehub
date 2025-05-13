type ButtonProps = {
  buttonText: string
}

export default function Button({ buttonText }: ButtonProps) {
  return (
    <button className='h-10 w-28 rounded-lg bg-orange-900 hover:bg-orange-800'>
      {buttonText}
    </button>
  )
}
