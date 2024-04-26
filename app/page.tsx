import styles from "./page.module.css"
import ConnectButton from "@/app/components/ConnectButton"
import NetworkButton from "@/app/components/NetworkButton"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <ConnectButton />
        <NetworkButton />
      </div>
    </main>
  )
}
