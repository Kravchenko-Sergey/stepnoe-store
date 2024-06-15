'use client'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Text } from '@/components/text/text'
import { TextField } from '@/components/text-field/text-field'
import { FaceIcon, CubeIcon, HeartIcon, BackpackIcon } from '@radix-ui/react-icons'
import '../styles/index.scss'

import s from './page.module.css'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const router = useRouter()

  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className={s.header}>
          <Text as='h1' variant='large' onClick={() => router.push('/')} className={s.logo}>
            Хуторок
          </Text>
          <TextField search placeholder='Искать товары' />
          <div className={s.iconBox}>
            <FaceIcon className={s.icon} />
            <Text>Сергей</Text>
          </div>
          <div className={s.iconBox}>
            <CubeIcon className={s.icon} />
            <Text>Заказы</Text>
          </div>
          <div className={s.iconBox}>
            <HeartIcon className={s.icon} />
            <Text>Избранное</Text>
          </div>
          <div onClick={() => router.push('/cart')} className={s.iconBox}>
            <BackpackIcon className={s.icon} />
            <Text>Корзина</Text>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
