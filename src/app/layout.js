import { Open_Sans } from "next/font/google"
import "./globals.css"
const inter = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "São Leopoldo Mandic - Pós-Graduação em Reprodução Assistida",
  description: "Pós-Graduação em Reprodução Assistida",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
