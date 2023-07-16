import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Communities Management System',
  description: 'Unleash the power of community building with our cutting-edge website creation tool. Effortlessly create engaging and interactive community sites that foster connections and drive meaningful interactions. Empower your community with our intuitive platform and unlock endless possibilities',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</body>
    </html>
  )
}

export default RootLayout
