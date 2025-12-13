interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
      <div className="flex gap-4 px-6 md:px-[calc((100vw-896px)/2+24px)]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-[400px] md:h-[500px] w-auto flex-shrink-0 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
