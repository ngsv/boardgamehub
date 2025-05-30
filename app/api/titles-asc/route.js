import { NextResponse } from 'next/server'
import { allGamesAscending } from '@/app/lib/utils/queries'

export async function GET() {
  const games = await allGamesAscending()
  return NextResponse.json(games)
}
