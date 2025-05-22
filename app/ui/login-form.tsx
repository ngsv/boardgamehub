'use client'

import { useSearchParams } from 'next/navigation'
import { useActionState } from 'react'
import {
  ExclamationCircleIcon,
  ArrowRightIcon,
  AtSymbolIcon,
  KeyIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

import { roboto } from '@/app/ui/fonts'
import { authenticate } from '@/actions'

import styles from '@/app/ui/login-form.module.css'

export default function LoginForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  )

  return (
    <div
      className={`${roboto.className} ${styles.itemsStartOnShortScreen} z-10 flex h-4/6 w-1/2 max-w-screen-md items-center justify-center overflow-y-auto rounded-2xl bg-primary py-9 max-[1023px]:w-3/4 max-[434px]:w-full`}
    >
      <form
        action={formAction}
        className='flex w-full justify-center text-sm sm:text-base'
      >
        <div className='flex w-9/12 flex-col space-y-3'>
          <h1 className='mb-3 text-xl font-medium sm:text-2xl'>
            Please log in to continue.
          </h1>
          <div>
            <label htmlFor='email'>Email</label>
            <div className='relative'>
              <input
                type='email'
                name='email'
                placeholder='Enter your email address'
                required
                className='peer mt-2 h-10 w-full rounded-lg border border-gray-200 px-3 pl-10 focus:border-black focus:outline-none'
              />
              <AtSymbolIcon className='absolute left-3 top-5 w-4 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <div className='relative'>
              <input
                type='password'
                name='password'
                placeholder='Enter password'
                minLength={8}
                required
                className='peer mt-2 h-10 w-full rounded-lg border border-gray-200 px-3 pl-10 focus:border-black focus:outline-none'
              />
              <KeyIcon className='absolute left-3 top-5 w-4 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div>
            <input type='hidden' name='redirectTo' value={callbackUrl} />
            <button
              className={clsx(
                'mt-6 flex h-11 w-full justify-between rounded-lg bg-orange-900 px-4 text-white hover:bg-orange-800',
                isPending ? 'opacity-50 aria-disabled:cursor-not-allowed' : ''
              )}
              aria-disabled={isPending}
            >
              <div className='flex items-center'>Log In</div>
              <ArrowRightIcon className='w-5' />
            </button>
          </div>
          {/* Error message */}
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
