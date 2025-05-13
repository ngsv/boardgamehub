type ButtonProps = {
  buttonText: string
  className?: string
}

export default function Button({ buttonText, className }: ButtonProps) {
  return (
    <button className={`h-10 w-28 rounded-lg bg-orange-900 ${className}`}>
      {buttonText}
    </button>
  )
}
