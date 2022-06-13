
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
          <div className='grid grid-cols-2 mt-7 gap-4 lg:gap-8'>
            <div>
              <p className='md:ml-[12vw] 2xl:ml-44 mt-5 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
              </p>
              <img className='hidden [@media_screen_and_(min-width:430px)]:block w-[10vw] lg:w-auto mt-24 mx-auto' src='/assets/mouseline.svg' />
            </div>
            <div className=''>
              <div className='flex space-x-[3vw] 2xl:space-x-[46px] [@media_screen_and_(max-width:1350px)]:mt-32 [@media_screen_and_(max-width:700px)]:mt-12'>
                <img className='w-[18vw] h-[42vw] 2xl:w-[280px] 2xl:h-[629px] rounded-[5vw] 2xl:rounded-[68px] ' src='/assets/rectangle01.webp' />
                <img className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[670px] rounded-[5vw] 2xl:rounded-[68px] mt-[-11vw] 2xl:mt-[-171px]' src='/assets/rectangle02.webp' />
              </div>
              {/* hide blur cards if unsupported */}
              <div className='flex space-x-[2.5vw] 2xl:space-x-[40px] ml-[10vw] 2xl:ml-40 opacity-0 [@supports(backdrop-filter:blur(0))]:opacity-100'>
                <div className='w-[18vw] h-[32vw] 2xl:w-[280px] 2xl:h-[479px] rounded-[5vw] 2xl:rounded-[68px] mt-[-20vw] 2xl:mt-[-300px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                <div className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[662px] rounded-[5vw] 2xl:rounded-[68px] mt-[-33vw] 2xl:mt-[-500px] shrink-0 bg-white/30 backdrop-blur-2xl' />
              </div>
            </div>
            <img className='[@media_screen_and_(min-width:430px)]:hidden col-span-2 w-[50px] mx-auto mt-[-2rem]' src='/assets/mouseline.svg' />
          </div>
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

