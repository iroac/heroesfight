import type { Metadata } from 'next'
import { Luckiest_Guy } from 'next/font/google'
import './globals.css'
import NavBar from '../components/navbar/navbar'

const luckiestGuy = Luckiest_Guy({ subsets: ['latin'], variable: "--font-luckiest-guy", weight: '400', preload: true })

export const metadata: Metadata = {
  title: 'HeroFight',
  description: 'Os maiores hérois do universo nas suas mãos',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt">
      <body className={` bg-black w-screen h-screen ${luckiestGuy.variable}`}>
        <NavBar />
        {children}
        <div className='modal-container'></div>
        </body>
    </html>
  )
}
