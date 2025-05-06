import { Inter, Lusitana, DM_Serif_Text, Roboto } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const dm_serif_text = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400']
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
