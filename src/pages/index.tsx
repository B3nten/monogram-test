
export default function Home() {
  return (
    <>

      {/* hero */}
      <section>
        <div className="flex flex-col items-start mt-10 md:mt-20 lg:mt-36 p-1 sm:px-2 md:px-0">
          <h1 className='md:ml-[8vw] 2xl:ml-32 text-5xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
            jamstack
            <span className='bg-[url(/assets/gradient.webp)] bg-[length:300px_200px] sm:bg-[length:500px_450px] lg:bg-[length:800px_600px] bg-right-top bg-clip-text text-transparent'> 101</span>
          </h1>
          <p className='md:ml-[12vw] 2xl:ml-44 mt-11 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
          </p>
          <img className='w-[10vw] lg:w-auto mt-24 md:ml-[24vw] 2xl:ml-[372]' src='/assets/mouseline.svg' />
        </div>
        <div>
          <img className='w-[280px] h-[629px] object-cover object-right-top rounded-[68px] ' src='/assets/gradient.webp' />
          <img className='w-[280px] h-[629px] object-cover object-bottom rounded-[68px] ' src='/assets/gradient.webp' />
        </div>
      </section>

      {/* Javascript computer section */}
      <section className='mt-10'>
        <div className="flex flex-col items-center px-4 space-y-[5vw] sm:space-y-10 md:space-y-12 lg:space-y-18 xl:space-y-20">
          <img className='absolute -z-10' src='/assets/orange_square.webp' />
          <h2 className='text-white text-4xl md:text-6xl lg:text-8xl xl:text-[133px] font-black'>javascript</h2>
          <p className='text-sm sm:text-lg text-white max-w-md md:max-w-[586px] md:leading-loose font-light'>Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
          <img className='w-[50vw] md:w-[60vw] xl:w-auto' src='/assets/computer.webp' />
        </div>
      </section>

    </>
  );
};

