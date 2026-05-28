import { ImageIcon } from "lucide-react";

export default function ImageSlot({
  src,
  alt = "",
  aspectRatio = "aspect-square",
  className = "",
}: {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-sm ${aspectRatio} rounded-2xl border border-dashed border-[#e8eaed] bg-[#f8f9fb] flex items-center justify-center overflow-hidden ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      ) : (
        <div className="text-center px-4">
          <ImageIcon className="h-10 w-10 text-[#d4d4d4] mx-auto" strokeWidth={1.5} />
          <p className="mt-3 text-sm text-[#a3a3a3]">Upload image</p>
        </div>
      )}
    </div>
  );
}