import ImageCard from "./ImageCard"

const images = [
  {
    src: "/hero_1.jpg",
    alt: "WhatsApp AI Agent Interface",
  },
  // {
  //   src: "/convrs-whatsapp-sales-advanced-analytics.webp",
  //   alt: "WhatsApp Sales Analytics Dashboard",
  // },
]

export default function HeroVideos() {
  return (
    <div className="flex-1">
      <ImageCard {...images[0]} />
    </div>
  )
}
