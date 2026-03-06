function HighlightImage() {
  return (
    <div className="flex justify-center items-center relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-blue-400/0 rounded-[40px] blur-2xl"></div>
      
      {/* Image Container */}
      <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
        <img
          src="/convrs-whatsapp-sales-advanced-analytics.webp"
          alt="WhatsApp AI Analytics Dashboard"
          className="rounded-[30px] md:rounded-[40px] object-cover w-full shadow-2xl"
        />
      </div>
    </div>
  );
}

export default HighlightImage;
