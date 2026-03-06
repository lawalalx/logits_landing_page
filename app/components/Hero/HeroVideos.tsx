import ImageCard from "./ImageCard"

const images = [
  {
    src: "/Whatsapp.webp",
    alt: "WhatsApp AI Agent Interface",
  },
  {
    src: "/convrs-whatsapp-sales-advanced-analytics.webp",
    alt: "WhatsApp Sales Analytics Dashboard",
  },
]

export default function HeroVideos() {
  return (
    <div className="flex gap-6 items-center justify-center">
      {images.map((image, i) => (
        <ImageCard key={i} {...image} />
      ))}
    </div>
  )
}
