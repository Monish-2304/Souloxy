import { useState, useEffect } from "react";

interface ImageCarousel {
  images: string[];
  texts: string[];
}

const ImageCarousel = ({ images, texts }: ImageCarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>; 

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [images.length, isHovered]); 

  const splitText = (text: string): JSX.Element => {
    const parts = text.split(",");
    const firstPart = parts[0];
    const remainingPart = parts.slice(1).join(",");
    return (
      <>
        <strong className="text-2xl text-[#4C614E]">{firstPart}</strong>
        <br />
        <span className="font-light text-xl text-[#4C614E]">{remainingPart}</span>
      </>
    );
  };

  return (
    <div className="relative w-full mt-16">
      <div
        className="flex items-center space-around ml-60 gap-x-36 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)} // Pause on hover
        onMouseLeave={() => setIsHovered(false)} // Resume on hover leave
      >
        <div className="w-[30vw] h-[20vw] ">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-[100%] h-[100%] object-contain transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="w-[25vw] p-4 text-black">
          <p className="text-lg font-semibold">{splitText(texts[currentIndex])}</p>
        </div>
      </div>

      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-0 text-black p-2 rounded-full text-4xl"
      >
        &#60;
      </button>

      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-0 text-black p-2 rounded-full text-4xl"
      >
        &#62;
      </button>
    </div>
  );
};

export default ImageCarousel;
