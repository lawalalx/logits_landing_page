type Props = {
  src: string
  alt: string
}

export default function ImageCard({ src, alt }: Props) {
  return (
    <div className="rounded-[30px] p-3 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
      <img
        src={src}
        alt={alt}
        className="rounded-[25px] w-[280px] h-[550px] object-cover shadow-md"
      />
    </div>
  )
}
