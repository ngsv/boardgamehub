import { NextRequest, NextResponse } from 'next/server'
import { browseGamesAscending } from '@/app/lib/queries'

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get('page'))
  const games = await browseGamesAscending(page)
  return NextResponse.json(games)
}
