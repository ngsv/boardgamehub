import { NextResponse } from 'next/server'
import { allGamesDescending } from '@/app/lib/utils/queries'

export async function GET() {
  const games = await allGamesDescending()
  return NextResponse.json(games)
}
