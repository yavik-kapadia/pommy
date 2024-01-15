
import { Button } from "@/components/ui/button"
import { Timer } from "@/components/timer"
import Image from 'next/image'
import { Pomodoro } from '@/constants/pomodoro_constants'
import Navbar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Timer />

    </main>
  )
}
