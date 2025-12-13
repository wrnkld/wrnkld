interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="w-full overflow-x-auto pt-4 pb-8 scrollbar-hide">
      <div className="flex gap-4 px-6 md:px-[calc((100vw-896px)/2+24px)]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-[400px] md:h-[500px] w-auto flex-shrink-0 object-contain transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2"
          />
        ))}
      </div>
    </div>
  );
}
