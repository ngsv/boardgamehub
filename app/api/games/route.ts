import { NextResponse, NextRequest } from 'next/server'
import { browseGames } from '@/app/lib/utils/queries'

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get('page'))
  const games = await browseGames(page)
  return NextResponse.json(games)
}
