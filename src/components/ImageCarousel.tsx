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
      <div className="leading-4 md:leading-7">
        <strong className=" text-xs lg:text-2xl md:text-2xl lg:text-lg text-[#4C614E]">{firstPart}</strong>
        <br />
        <span className="font-light text-xs md:text-md lg:text-lg text-[#4C614E]">{remainingPart}</span>
      </div>
    );
    
  };
  return (
    <div className="relative w-full mt-16">
      <div
        className="flex items-center justify-center sm:space-x-8 lg:space-x-36 ml-10 sm:ml-4 gap-x-8 sm:gap-x-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)} // Pause on hover
        onMouseLeave={() => setIsHovered(false)} // Resume on hover leave
      >
        <div className="w-[60vw] sm:w-[80vw] md:w-[70vw] lg:w-[30vw] h-[40vw] sm:h-[50vw] md:h-[40vw]">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-contain transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="w-[80vw] sm:w-[80vw] md:w-[40vw] lg:w-[25vw] p-4 text-black">
          {/* <p className=" text-sm lg:text-lg md:text-2xl lg:text-lg font-semibold">{splitText(texts[currentIndex])}</p> */}
        <p>{splitText(texts[currentIndex])}</p>
        </div>
      </div>
  
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-0 text-black p-2 rounded-full text-4xl"
      >
        &#60;
      </button>
  
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className=" hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-0 text-black p-2 rounded-full text-4xl"
      >
        &#62;
      </button>
    </div>
  );
  
};

export default ImageCarousel;
