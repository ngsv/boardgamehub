import { roboto } from '@/app/ui/fonts'
// import styles from '@/app/ui/register-form.module.css'

export default function LoginForm() {
  return (
    <div
      className={`${roboto.className} bg-primary z-10 flex h-5/6 w-1/2 max-w-screen-md items-center justify-center overflow-y-auto rounded-2xl py-9 max-[1023px]:w-3/4 max-[434px]:w-full`}
    >
      <form className='flex w-full justify-center text-sm sm:text-base'>
        <div className='flex w-9/12 flex-col space-y-3'>
          <h1 className='mb-3 text-xl font-medium sm:text-2xl'>
            Please login to continue.
          </h1>
          <div className='w-full grid-cols-2 gap-x-4 sm:grid'>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <div>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Enter first name'
                  required
                  className='mt-2 h-10 w-full rounded-lg px-3'
                />
              </div>
            </div>
            <div className='mt-2 sm:mt-0'>
              <label htmlFor='lastName'>Last Name</label>
              <div>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Enter last name'
                  required
                  className='mt-2 h-10 w-full rounded-lg px-3'
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <div>
              <input
                type='text'
                name='username'
                placeholder='Enter username'
                required
                className='mt-2 h-10 w-full rounded-lg px-3'
              />
            </div>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <div>
              <input
                type='email'
                name='email'
                placeholder='Enter your email address'
                required
                className='mt-2 h-10 w-full rounded-lg px-3'
              />
            </div>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <div>
              <input
                type='password'
                name='password'
                placeholder='Enter password'
                minLength={8}
                required
                className='mt-2 h-10 w-full rounded-lg px-3'
              />
            </div>
          </div>
          <div>
            <button className='mt-6 h-10 w-full rounded-lg bg-orange-900 text-white'>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
