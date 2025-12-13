interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="w-full overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6 md:-mx-[calc((100vw-896px)/2)] md:px-[calc((100vw-896px)/2)]">
      <div className="flex gap-4">
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
