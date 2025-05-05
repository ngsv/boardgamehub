import { NextResponse } from 'next/server'
import { seedUsers } from './users'
import { seedBoardGames } from './boardgames'

export async function POST(req) {
  try {
    const { type } = await req.json()
    let result
    if (type === 'users') {
      result = await seedUsers()
    } else if (type === 'boardgames') {
      result = await seedBoardGames()
    } else {
      return NextResponse.json({ error: 'Invalid seed type.' }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('❌ Seeding error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
