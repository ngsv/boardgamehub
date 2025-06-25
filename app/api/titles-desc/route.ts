import { NextRequest, NextResponse } from 'next/server'
import { browseGamesDescending } from '@/app/lib/utils/queries'

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get('page'))
  const games = await browseGamesDescending(page)
  return NextResponse.json(games)
}
