'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import Image from 'next/image';

const LogosCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true }, [
    AutoScroll({
      speed: 1.5,
      stopOnInteraction: false,
      startDelay: 0,
      stopOnFocusIn: false,
    }),
  ]);

  return (
    <div className='flex justify-center w-[450px] md:w-[600px] lg:w-[700px] xl:w-[900px]'>
      <section
        ref={emblaRef}
        className='flex justify-center overflow-hidden relative mb-5 md:mb-10 lg:mb-14 hover:cursor-grab active:cursor-grabbing select-none'
      >
        <div className='flex items-center max-w-6xl md:pt-5'>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/citroen.webp'
              width={300}
              height={300}
              alt='logo audi'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/jeep.webp'
              width={300}
              height={300}
              alt='logo bmw'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/peugeot.webp'
              width={300}
              height={300}
              alt='logo ford'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/audi.webp'
              width={300}
              height={300}
              alt='logo mercedesbenz'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/kia.webp'
              width={300}
              height={300}
              alt='logo peugeot'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/volkswagen.webp'
              width={300}
              height={300}
              alt='logo volkswagen'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/ford.webp'
              width={300}
              height={300}
              alt='logo jeep'
            />
          </article>
          <article className='flex-[0_0_25%] sm:flex-[0_0_20%] ml-10 sm:ml-16 lg:ml-10'>
            <Image
              priority
              src='/assets/logos-carousel/mercedes.webp'
              width={300}
              height={300}
              alt='logo fiat'
            />
          </article>
        </div>
        <div className='absolute w-3 sm:w-5 md:w-10 lg:w-16 h-full top-0 left-0 bg-gradient-to-r from-black'></div>
        <div className='absolute w-3 sm:w-5 md:w-10 lg:w-16 h-full top-0 right-0 bg-gradient-to-l from-black'></div>
      </section>
    </div>
  );
};

export default LogosCarousel;
