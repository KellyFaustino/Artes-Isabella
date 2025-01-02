'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const QuadroCarrossel = () => {
  const carouselRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const carouselItems = carouselRef.current.querySelectorAll('[data-carousel-item]');
    const showItem = (index) => {
      carouselItems.forEach((item, i) => {
        item.classList.add('hidden');
        if (i === index) {
          item.classList.remove('hidden');
        }
      });
    };

    const goToNext = () => {
      currentIndex.current = (currentIndex.current + 1) % carouselItems.length;
      showItem(currentIndex.current);
    };

    const goToPrev = () => {
      currentIndex.current =
        (currentIndex.current - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentIndex.current);
    };

    nextButtonRef.current.addEventListener('click', goToNext);
    prevButtonRef.current.addEventListener('click', goToPrev);

    // Exibir o primeiro item inicialmente
    showItem(currentIndex.current);

    return () => {
      nextButtonRef.current.removeEventListener('click', goToNext);
      prevButtonRef.current.removeEventListener('click', goToPrev);
    };
  }, []);

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide" ref={carouselRef}>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {['/quadro1.jpeg', '/quadro7.jpg', '/quadro8.jpg', '/HomenagemAniversario.jpg', '/BiscuitVarios.jpg'].map(
          (src, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
          )
        )}
      </div>

      {/* Botão Anterior */}
      <button
        ref={prevButtonRef}
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Botão Próximo */}
      <button
        ref={nextButtonRef}
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default QuadroCarrossel;
