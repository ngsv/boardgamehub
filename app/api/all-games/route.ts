import { NextResponse } from 'next/server'
import { allGames } from '@/app/lib/queries'

export async function GET() {
  const games = await allGames()
  return NextResponse.json(games)
}
