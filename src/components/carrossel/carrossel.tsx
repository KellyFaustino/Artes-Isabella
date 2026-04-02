"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ApiItem = {
  image: string;
};

const QuadroCarrossel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<string[]>([]);

  const showItem = (index: number) => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.querySelectorAll<HTMLElement>(
      "[data-carousel-item]",
    );

    items.forEach((item: HTMLElement, i: number) => {
      item.classList.add("hidden");

      if (i === index) {
        item.classList.remove("hidden");
      }
    });
  };

  const goToNext = () => {
    if (carouselItems.length === 0) return;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const goToPrev = () => {
    if (carouselItems.length === 0) return;

    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length,
    );
  };

  useEffect(() => {
    showItem(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    fetch("/api/artigos")
      .then((res) => res.json())
      .then((data: ApiItem[]) => {
        const imagens = data.map((item: ApiItem) => item.image);
        setCarouselItems(imagens);
      });
  }, []);

  return (
    <div
      id="gallery"
      className="relative w-full"
      data-carousel="slide"
      ref={carouselRef}
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {carouselItems.map((src: string, index: number) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              className="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={goToPrev}
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
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

      <button
        type="button"
        onClick={goToNext}
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
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
