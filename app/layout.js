import { Inter } from "next/font/google"
import "./globals.css"
import classNames from "classnames"

const inter = Inter({ subsets: ["latin"] })

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})
const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
