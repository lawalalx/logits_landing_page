function FeatureItem({ title, description, align = "left" }) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      } md:items-center md:text-center`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 border border-white/10">
        <svg viewBox="0 0 16 16" className="w-4 h-4">
          <circle cx="8" cy="8" r="4" fill="#FAAD13" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white font-[Space_Grotesk]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}


export default FeatureItem;
