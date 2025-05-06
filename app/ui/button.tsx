export default function Button(props) {
  return (
    <button className='h-10 w-28 rounded-lg bg-orange-900'>
      {props.buttonText}
    </button>
  )
}
