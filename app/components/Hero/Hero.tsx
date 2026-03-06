import HeroVideos from "./HeroVideos"
import HeroContent from "./HeroContent"

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16"
    >
      {/* Left Side */}
      <HeroVideos />

      {/* Right Side */}
      <HeroContent />
    </section>
  )
}
