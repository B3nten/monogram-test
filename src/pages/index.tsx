
export default function Home() {
  return (
    <>

      {/* Hero section */}
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
                <img className='w-[18vw] h-[42vw] 2xl:w-[280px] 2xl:h-[629px]' src='/assets/rectangle01.webp' />
                <img className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[670px] mt-[-11vw] 2xl:mt-[-171px]' src='/assets/rectangle02.webp' />
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

      {/* Logo section */}
      <div className="relative bg-brand-bg mt-[-10rem] sm:mt-[-20rem] lg:mt-[-28rem] xl:mt-[-32rem] -z-30">
        <section>

          {/* display grid */}
          <div className='absolute grid grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-10 inset-0'>
            <div className='border-l border-white/30 border-dashed'></div>
            <div className='border-x border-white/30 border-dashed'></div>
            <div className='border-r border-white/30 border-dashed'></div>
            <div className='hidden lg:block border-r border-white/30 border-dashed'></div>
          </div>

          {/* Logo grid */}
          <div className='grid grid-cols-3 lg:grid-cols-4 pb-4 max-w-7xl mx-auto px-4 sm:px-10 [&>div>img]:scale-125'>
            <div>
              <img className='mt-96 ' src='/assets/logos/react.svg' />
              <img className='mt-48 ' src='/assets/logos/svelte.svg' />
            </div>
            <div>
              <img className='mt-[30rem]' src='/assets/logos/next.svg' />
              <img className='mt-56' src='/assets/logos/react_dim.svg' />
            </div>
            <div>
              <img className='mt-[50rem]' src='/assets/logos/vue.svg' />
            </div>
            <div className='hidden lg:block'>
              <img className='mt-20 translate-x-10' src='/assets/logos/next.svg' />
              <img className='mt-48' src='/assets/logos/react.svg' />
              <img className='mt-72' src='/assets/logos/svelte_dim.svg' />
            </div>
          </div>

          {/* Ball */}
          <div className='relative flex flex-col items-center pb-40'>
            <div className='absolute w-screen bottom-0 -z-20'>
              <img className='w-full' src='/assets/squiggly.svg' />
              <div className='w-full bg-white h-96 -mt-2'></div>
            </div>
            <h1 className='text-[133px] text-white font-black text-center'>api</h1>
            <p className='max-w-[730px] text-2xl text-white text-center mt-10'>At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
            <div className="relative inline-block mx-auto mt-40">
              <img src='/assets/ball.webp' />
              <div className='absolute -inset-2 bg-gradient-to-tr from-blue-600 to-purple-700 -z-10 rounded-full blur-[128px] -translate-y-10 -translate-x-10'></div>
              <div className='absolute inset-0 bg-white -z-10 rounded-full blur-2xl -translate-y-8 -translate-x-8'></div>
            </div>
          </div>
        </section>
      </div>

      {/* Markup section */}
      <section>

      </section>
    </>
  );
};

