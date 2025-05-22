export default function RegisterOverlay() {
  const handleClick = () => {
    window.location.href = '/login'
  }

  return (
    <div className='absolute flex h-48 w-96 flex-col items-center justify-center space-y-6 rounded-lg bg-gray-800 font-medium text-white'>
      <div>
        <p>Registration successful!</p>
        <p>Log in to continue.</p>
      </div>
      <button
        className='h-10 w-28 rounded-lg bg-orange-900 hover:bg-orange-800'
        onClick={handleClick}
      >
        Log In
      </button>
    </div>
  )
}
