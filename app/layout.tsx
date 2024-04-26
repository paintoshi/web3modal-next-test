import type { Metadata } from "next"
import Web3ModalProvider from '@/context'
import "./globals.css"

export const metadata: Metadata = {
  title: "My Dapp",
  description: "Generic Dapp",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
    <html lang='en'>
      <body>
        <Web3ModalProvider>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  )
}
