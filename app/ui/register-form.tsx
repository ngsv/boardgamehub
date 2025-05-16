'use client'

import { useActionState } from 'react'
import {
  ArrowRightIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

import { registerUser } from '@/actions'

import { roboto } from '@/app/ui/fonts'
import styles from '@/app/ui/register-form.module.css'

export default function RegisterForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    registerUser,
    undefined
  )

  return (
    <div
      className={`${roboto.className} ${styles.itemsStartOnShortScreen} z-10 flex h-5/6 w-1/2 max-w-screen-md items-center justify-center overflow-y-auto rounded-2xl bg-primary py-9 max-[1023px]:w-3/4 max-[434px]:w-full`}
    >
      <form
        action={formAction}
        className='flex w-full justify-center text-sm sm:text-base'
      >
        <div className='flex w-9/12 flex-col space-y-3'>
          <h1 className='mb-3 text-xl font-medium sm:text-2xl'>
            Please register to continue.
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
                  className='mt-2 h-10 w-full rounded-lg px-3 focus:border focus:border-black focus:outline-none'
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
                  className='mt-2 h-10 w-full rounded-lg px-3 focus:border focus:border-black focus:outline-none'
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
                minLength={4}
                maxLength={20}
                required
                className='mt-2 h-10 w-full rounded-lg px-3 focus:border focus:border-black focus:outline-none'
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
                className='mt-2 h-10 w-full rounded-lg px-3 focus:border focus:border-black focus:outline-none'
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
                maxLength={100}
                required
                className='mt-2 h-10 w-full rounded-lg px-3 focus:border focus:border-black focus:outline-none'
              />
            </div>
          </div>
          <div>
            <button
              className='mt-6 flex h-11 w-full justify-between rounded-lg bg-orange-900 px-4 text-white hover:bg-orange-800'
              aria-disabled={isPending}
            >
              <div className='flex items-center'>Register</div>
              <ArrowRightIcon className='w-5' />
            </button>
          </div>
          {/* Error Message */}
          <div
            className='flex h-8 items-end space-x-1'
            aria-live='polite'
            aria-atomic='true'
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className='h-6 w-6 text-red-600' />
                <p className='text-md font-normal text-red-600'>
                  {errorMessage}
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
