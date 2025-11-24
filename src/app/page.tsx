import { Hero } from "@/components/ui/Hero"
import Testimonials from "@/components/ui/Testimonials"
import VoicePilotFeatures from "@/components/ui/VoicePilotFeatures"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>
      <div className="mt-52 px-4 xl:px-0">
        <VoicePilotFeatures />
      </div>
      <div className="mt-36 px-4 xl:px-0">
        <Testimonials />
      </div>
    </main>
  )
}
