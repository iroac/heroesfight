import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HeroFight',
  description: 'Os maiores hérois do universo nas suas mãos',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt">
      <body className={` bg-black w-screen h-screen ${inter.className}`}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
