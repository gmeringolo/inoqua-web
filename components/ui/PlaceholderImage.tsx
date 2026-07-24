type PlaceholderImageProps = {
  label?: string;
  className?: string;
};

/**
 * Rectángulo de color que marca dónde va una imagen real.
 * Reemplazá cada uso de <PlaceholderImage /> por tu <Image> real cuando tengas las fotos definitivas.
 * Ej: <PlaceholderImage label="Foto hero" className="absolute inset-0" />
 */
export default function PlaceholderImage({ label = "Imagen", className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-azul/25 bg-azul/[0.06] ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center text-azul/40">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
