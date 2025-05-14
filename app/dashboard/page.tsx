import { signOut } from '@/auth'

export default function Dashboard() {
  return (
    <div>
      <h1>Testing</h1>
      <form
        action={async () => {
          'use server'
          await signOut({ redirectTo: '/' })
        }}
      >
        <button>Logout</button>
      </form>
    </div>
  )
}
