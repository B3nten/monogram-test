
export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section>
        {/* Desktop */}
        <div className="hidden sm:flex flex-col items-start mt-10 md:mt-20 lg:mt-36 p-1 sm:px-2 md:px-0">
          <h1 className='md:ml-[8vw] 2xl:ml-32 text-5xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
            jamstack
            <span className='bg-[url(/assets/text.webp)] bg-bottom bg-cover bg-clip-text text-transparent'> 101</span>
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
              <div className='flex space-x-[2.5vw] 2xl:space-x-[40px] ml-[10vw] 2xl:ml-40 opacity-0 [@supports(backdrop-filter:blur(0))]:opacity-100'>
                <div className='w-[18vw] h-[32vw] 2xl:w-[280px] 2xl:h-[479px] rounded-[5vw] 2xl:rounded-[68px] mt-[-20vw] 2xl:mt-[-300px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                <div className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[662px] rounded-[5vw] 2xl:rounded-[68px] mt-[-33vw] 2xl:mt-[-500px] shrink-0 bg-white/30 backdrop-blur-2xl' />
              </div>
            </div>
            <img className='[@media_screen_and_(min-width:430px)]:hidden col-span-2 w-[50px] mx-auto mt-[-2rem]' src='/assets/mouseline.svg' />
          </div>
        </div>
        {/* Mobile View */}
        <div className='p-2 mt-10 sm:hidden h-screen'>
          <div className="flex flex-col items-center justify-start h-full">
            <h1 className='text-7xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
              jamstack
            </h1>
            <span className='text-8xl font-black bg-[url(/assets/text.webp)] bg-bottom bg-cover bg-clip-text text-transparent'> 101</span>
            <p className='md:ml-[12vw] 2xl:ml-44 mt-5 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
            </p>
            <img className='col-span-2 mx-auto mt-10 h-1/2' src='/assets/mouseline.svg' />
          </div>
        </div>
      </section>

      {/* Javascript computer section */}
      <section className='mt-10'>
        <div className="flex flex-col items-center px-4 space-y-[5vw] sm:space-y-10 md:space-y-12 lg:space-y-18 xl:space-y-20">
          <div className="absolute -z-10 px-2 md:px-4 2xl:px-0"><img className='' src='/assets/orange_square.webp' /></div>
          <h2 className='text-white text-4xl md:text-6xl lg:text-8xl xl:text-[133px] font-black'>javascript</h2>
          <p className='text-sm sm:text-lg text-white max-w-md md:max-w-[586px] md:leading-loose font-light'>Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
          <img className='w-[50vw] md:w-[60vw] xl:w-auto' src='/assets/computer.webp' />
        </div>
      </section>;

      {/* Logo section */}
      <div className="relative bg-brand-bg mt-[-15rem] sm:mt-[-20rem] md:mt-[-28rem] lg:mt-[-32rem] xl:mt-[-38rem] -z-30">
        <section>
          {/* display grid */}
          <div className='absolute grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 max-w-[1350px] mx-auto px-4 sm:px-10 inset-0'>
            <div className='border-l border-white/30 border-dashed'></div>
            <div className='border-x border-white/30 border-dashed'></div>
            <div className='hidden sm:block border-r border-white/30 border-dashed'></div>
            <div className='hidden lg:block border-r border-white/30 border-dashed'></div>
          </div>
          {/* Logo grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pb-4 max-w-7xl mx-auto px-4 sm:px-10 [&>div>img]:scale-125'>
            <div>
              <img className='mt-32 sm:mt-72 md:mt-96 ' src='/assets/logos/react.svg' />
              <img className='mt-32 sm:mt-60 md:mt-48 ' src='/assets/logos/svelte.svg' />
            </div>
            <div>
              <img className='mt-48 sm:mt-96 md:mt-[30rem]' src='/assets/logos/next.svg' />
              <img className='sm:hidden mt-24 mb-24 md:mt-[20rem] lg:mt-[50rem]' src='/assets/logos/vue.svg' />
              <img className='hidden lg:mt-60 lg:block' src='/assets/logos/react_dim.svg' />
            </div>
            <div className='hidden sm:block'>
              <img className='mt-[12rem] md:mt-[20rem] lg:mt-[50rem]' src='/assets/logos/vue.svg' />
              <img className='mt-[10rem] md:mt-36 lg:hidden' src='/assets/logos/react_dim.svg' />
              <img className='mt-24 md:mt-20 opacity-30 md:hidden' src='/assets/logos/next.svg' />
            </div>
            <div className='hidden lg:block overflow-clip'>
              <img className='md:mt-20 translate-x-10' src='/assets/logos/next.svg' />
              <img className='md:mt-48' src='/assets/logos/react.svg' />
              <img className='md:mt-80' src='/assets/logos/svelte_dim.svg' />
            </div>
          </div>

          {/* Ball */}
          <div className='relative flex flex-col items-center pb-40'>
            <div className='absolute top-1/2 bottom-0 flex flex-col -z-10'>
              <img src='/assets/squiggly.svg' className='w-full' />
              <div className='bg-white basis-[110%] -mt-4'></div>
            </div>
            <h1 className='text-6xl lg:text-[133px] text-white font-black text-center'>api</h1>
            <p className='max-w-[85%] md:max-w-[730px] lg:text-2xl text-white text-center mt-10 mb-16 lg:mb-40'>At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
            <div className="relative mx-auto px-4 lg:px-0">
              <img src='/assets/ball.webp' />
              <div className='absolute inset-0 lg:-inset-2 bg-gradient-to-tr from-blue-600 to-purple-700 -z-10 rounded-full 
              lg:blur-[128px] blur-3xl -translate-y-5 lg:-translate-y-10 -translate-x-5 lg:-translate-x-10'></div>
              <div className='absolute inset-2 lg:inset-0 bg-white -z-10 rounded-full blur-xl lg:blur-2xl -translate-y-4 lg:-translate-y-8 -translate-x-4 lg:-translate-x-8'></div>
            </div>
          </div>

        </section>
      </div>

      {/* Markup section */}
      <section>
        <div className="hidden sm:flex flex-col items-start mt-10 md:mt-20 lg:mt-36 p-1 sm:px-2 md:px-0">
          <h1 className='md:ml-[8vw] 2xl:ml-32 text-5xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
            markup
          </h1>
          <div className='grid grid-cols-2 mt-7 gap-4 lg:gap-8'>
            <div>
              <p className='md:ml-[8vw] 2xl:ml-32 mt-5 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
              </p>
              <img className='hidden [@media_screen_and_(min-width:430px)]:block w-[10vw] lg:w-auto mt-24 mx-auto' src='/assets/mouseline.svg' />
            </div>
            <div className=''>
              <div className='flex space-x-[3vw] 2xl:space-x-[46px] [@media_screen_and_(max-width:1350px)]:mt-32 [@media_screen_and_(max-width:700px)]:mt-12'>
                <img className='w-[18vw] h-[42vw] 2xl:w-[280px] 2xl:h-[629px]' src='/assets/rectangle01.webp' />
                <img className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[670px] mt-[-11vw] 2xl:mt-[-171px]' src='/assets/rectangle02.webp' />
              </div>
              <div className='flex space-x-[2.5vw] 2xl:space-x-[40px] ml-[10vw] 2xl:ml-40 opacity-0 [@supports(backdrop-filter:blur(0))]:opacity-100'>
                <div className='w-[18vw] h-[32vw] 2xl:w-[280px] 2xl:h-[479px] rounded-[5vw] 2xl:rounded-[68px] mt-[-20vw] 2xl:mt-[-300px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                <div className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[662px] rounded-[5vw] 2xl:rounded-[68px] mt-[-33vw] 2xl:mt-[-500px] shrink-0 bg-white/30 backdrop-blur-2xl' />
              </div>
            </div>
            <img className='[@media_screen_and_(min-width:430px)]:hidden col-span-2 w-[50px] mx-auto mt-[-2rem]' src='/assets/mouseline.svg' />
          </div>
        </div>
        {/* Mobile View */}
        <div className='p-2 mt-10 sm:hidden min-h-screen'>
          <div className="flex flex-col items-center justify-start">
            <h1 className='text-7xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
              markup
            </h1>
            <p className='md:ml-[12vw] 2xl:ml-44 mt-5 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
            </p>
            <img className='col-span-2 mx-auto mt-[2rem]' src='/assets/mouseline.svg' />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <div className="relative bg-brand-bg px-0 sm:px-5 2xl:px-0">
        <div className='absolute grid grid-cols-3 lg:grid-cols-4 max-w-[1350px] mx-auto px-4 sm:px-10 inset-0'>
          <div className='border-l border-white/30 border-dashed'></div>
          <div className='border-x border-white/30 border-dashed'></div>
          <div className='border-r border-white/30 border-dashed'></div>
          <div className='hidden lg:block border-r border-white/30 border-dashed'></div>
        </div>
        <section className='flex flex-col items-center -translate-y-24'>
          <div className='relative w-full max-w-[1204px] rounded-[68px] p-10 backdrop-blur-[128px] border border-[#e2ffd125]
          [@supports(backdrop-filter:blur(0))]:backdrop-blur-[128px] [@supports(backdrop-filter:blur(0))]:[background:linear-gradient(-24.39deg,rgba(255,255,255,0.024)_35.54%,rgba(123,245,93,.15)_75.25%)] [background:linear-gradient(#afbdac_-15%,#263822_20%,rgba(255,255,255,.05))]'>
            <h2 className='md:mt-12 lg:mt-20 2xl:mt-24 text-center text-5xl sm:text-6xl lg:text-7xl font-black text-[#EFFFE2]'>top audit scores</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-4 mt-10 lg:mt-14 mb-16 lg:mb-24'>
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <p className='relative mx-auto text-lg md:text-2xl lg:text-[26px] max-w-3xl text-transparent lg:leading-10 mb-24 lg:mb-48
            bg-gradient-to-br from-[#c5ffc0] to-white/80 bg-clip-text'>
              Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.<br /><br />Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.<br /><br />A Jamstack website, delivering SEO-friendly, lean {'&'} clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
          </div>
          {/* Footer */}
          <div className='relative space-y-5 mt-60 mb-48'>
            <p className='text-2xl text-white text-center'>This is a design test by Benton Boychuk-Chorney for Monogram.</p>
            <p className='text-5xl text-center'>💜</p>
          </div>
        </section>
      </div >
    </>
  );
};

function Circle() {
  return <div className='relative'>
    <img src='/assets/circle.svg' className='scale-125' />
    <div className='text-4xl md:text-5xl lg:text-6xl text-[#EFFFE2] font-bold absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 drop-shadow-circle'>
      100
    </div>
  </div>;
}
