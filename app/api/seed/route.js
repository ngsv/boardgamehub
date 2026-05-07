import { NextResponse } from 'next/server'
import { seedUsers } from './users'
import { seedBoardGames } from './boardgames'

export async function POST(req) {
  try {
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json(
        {
          error: 'Seeding is only allowed in local development.'
        },
        { status: 403 }
      )
    }

    const { type } = await req.json()
    if (type === 'users') {
      return NextResponse.json(await seedUsers())
    } else if (type === 'boardgames') {
      return NextResponse.json(await seedBoardGames())
    } else {
      return NextResponse.json({ error: 'Invalid seed type.' }, { status: 400 })
    }
  } catch (error) {
    console.error('❌ Seeding error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
