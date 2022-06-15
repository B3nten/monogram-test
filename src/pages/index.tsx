import { Circle } from "@src/modules/index/Circle";
import { useAnimateIn } from "@src/common/hooks/useAnimateIn";
import { use3D } from "@src/common/hooks/use3D";
import { Ball } from '@modules/index/Ball';


export default function Home() {
  // check if 3d is possible
  const useThree = use3D();

  // Desktop or hybrid elements
  const jsHeader = useAnimateIn();
  const jsText = useAnimateIn();
  const apiHeader = useAnimateIn();
  const apiText = useAnimateIn();
  const markupHeader = useAnimateIn();
  const markupText = useAnimateIn();
  const markupBlockA = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const markupBlockB = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const markupBlockC = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const panelHeader = useAnimateIn();
  const panelText = useAnimateIn({ threshold: .25 });
  const footerText = useAnimateIn({ threshold: .5 });

  // Mobile elements
  const mobileMarkupHeader = useAnimateIn();
  const mobileMarkupText = useAnimateIn();
  const mobileMarkupBlockA = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const mobileMarkupBlockB = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const mobileMarkupBlockC = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const mobileMarkupBlockD = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const mobileMarkupBlockE = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
  const mobileMarkupBlockF = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });

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
            <div>
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
          <h2 ref={jsHeader} className='text-white text-4xl md:text-6xl lg:text-8xl xl:text-[133px] font-black 
          '>javascript</h2>
          <p ref={jsText} className='text-sm sm:text-lg text-white max-w-md md:max-w-[586px] md:leading-loose font-light '>Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
          <img className='w-[50vw] md:w-[60vw] xl:w-auto relative z-10' src='/assets/computer.webp' />
        </div>
      </section>;

      {/* Logo section */}
      <div className="relative  mt-[-15rem] sm:mt-[-20rem] md:mt-[-28rem] lg:mt-[-32rem] xl:mt-[-38rem] w-screen">
        {/* Display grid */}
        <div className='absolute inset-0 w-screen bg-brand-bg -z-30'></div>
        <div className='absolute grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 max-w-[1350px] mx-auto px-4 sm:px-10 inset-0'>
          <div className='border-l border-white/30 border-dashed'></div>
          <div className='border-x border-white/30 border-dashed'></div>
          <div className='hidden sm:block border-r border-white/30 border-dashed'></div>
          <div className='hidden lg:block border-r border-white/30 border-dashed'></div>
        </div>
        <section>
          {/* Logo grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pb-4 max-w-7xl mx-auto px-4 sm:px-10 [&>div>img]:scale-125'>
            <div>
              <img className='mt-32 sm:mt-72 md:mt-96 ' src='/assets/logos/react.svg' />
              <img className='mt-48 sm:mt-60 md:mt-48 ' src='/assets/logos/svelte.svg' />
            </div>
            <div>
              <img className='mt-64 sm:mt-96 md:mt-[30rem]' src='/assets/logos/next.svg' />
              <img className='sm:hidden mt-48 md:mt-[20rem] lg:mt-[50rem]' src='/assets/logos/vue.svg' />
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
              <img className='md:mt-80 pb-10' src='/assets/logos/svelte_dim.svg' />
            </div>
          </div>

          {/* Ball */}
          <div className='relative flex flex-col items-center pb-40 mt-10'>
            <div className='absolute w-screen top-1/2 bottom-0 flex flex-col -z-10'>
              <img src='/assets/squiggly.svg' className='w-full' />
              <div className='bg-white basis-[110%]'></div>
            </div>
            <h1 ref={apiHeader} className='text-6xl lg:text-[133px] text-white font-black text-center '>api</h1>
            <p ref={apiText} className='max-w-[85%] md:max-w-[730px] lg:text-2xl text-white text-center mt-10 mb-16 lg:mb-40 '>At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
            <div className="relative mx-auto px-4 lg:px-0">
              <div className="mx-auto w-screen max-w-[914px] aspect-square">
                {useThree && <Ball />}
              </div>
              <img src='/assets/ball.webp' className='hidden' />
              <div className='absolute inset-0 lg:-inset-2 bg-gradient-to-tr from-blue-600 to-purple-700 -z-10 rounded-full 
              lg:blur-[128px] blur-3xl -translate-y-5 lg:-translate-y-10 -translate-x-5 lg:-translate-x-10'></div>
              <div className='absolute inset-2 lg:inset-0 bg-white -z-10 rounded-full blur-xl lg:blur-2xl -translate-y-4 lg:-translate-y-8 -translate-x-4 lg:-translate-x-8'></div>
            </div>
          </div>

        </section>
      </div>

      {/* Markup section */}
      <section>
        <div className="hidden sm:flex flex-col items-start mt-10 p-1 sm:px-2 md:px-0">
          <h1 ref={markupHeader} className=' md:ml-[8vw] 2xl:ml-32 text-5xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
            markup
          </h1>
          <div className='grid grid-cols-2 mt-7 gap-4 lg:gap-8'>
            <div>
              <p ref={markupText} className='md:ml-[8vw] 2xl:ml-32 mt-5 text-sm sm:text-base lg:text-lg 2xl:text-2xl max-w-md sm:max-w-[549px] text-[#414141]'>
                When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.
              </p>
              {/* floating blocks */}
              <div className="mt-10 lg:mt-20 xl:mt-32">
                <div ref={markupBlockA}>
                  <Block noScale color="bg-[#0165B1] ml-[16.4vw] 2xl:ml-[248px] rotate-[-16.91deg]" />
                </div>
                <div ref={markupBlockB}>
                  <Block noScale color="bg-[#D12510] mt-32 ml-[3.8vw] 2xl:ml-[58px] rotate-[14.16deg]" />
                </div>
                <div ref={markupBlockC}>
                  <Block noScale color="bg-[#FEC05C] mt-10 ml-[25.6vw] 2xl:ml-[416px] -translate-y-20 rotate-[-58.55deg]" />
                </div>
              </div>
            </div>
            {/* blocks */}
            <div className=''>
              <div className='flex space-x-[3vw] 2xl:space-x-[46px] [@media_screen_and_(max-width:1350px)]:mt-32 [@media_screen_and_(max-width:700px)]:mt-12'>
                <img className='w-[18vw] h-[42vw] 2xl:w-[280px] 2xl:h-[629px] rounded-[68px]' src='/assets/blocks.webp' />
                <img className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[670px] mt-[-11vw] rounded-[68px] 2xl:mt-[-171px]' src='/assets/blocks.webp' />
              </div>
              <div className='flex space-x-[2.5vw] 2xl:space-x-[40px] ml-[10vw] 2xl:ml-40 opacity-0 [@supports(backdrop-filter:blur(0))]:opacity-100'>
                <div className='w-[18vw] h-[32vw] 2xl:w-[280px] 2xl:h-[479px] rounded-[5vw] 2xl:rounded-[68px] mt-[-20vw] 2xl:mt-[-300px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                <div className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[662px] rounded-[5vw] 2xl:rounded-[68px] mt-[-33vw] 2xl:mt-[-500px] shrink-0 bg-white/30 backdrop-blur-2xl' />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className='p-2 sm:hidden'>
          <div className="flex flex-col items-center justify-start">
            <h1 ref={mobileMarkupHeader} className='text-7xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
              markup
            </h1>
            <p ref={mobileMarkupText} className='md:ml-[12vw] 2xl:ml-44 mt-5 text-base text-center sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
            </p>
            <div className="mt-10 self-stretch mb-10">
              <div ref={mobileMarkupBlockA}>
                <Block color="bg-[#0165B1] ml-[8vw] rotate-[-16.91deg]" />
              </div>
              <div ref={mobileMarkupBlockB}>
                <Block color="bg-[#D12510] mt-10 ml-[25vw] rotate-[14.16deg]" />
              </div>
              <div ref={mobileMarkupBlockC}>
                <Block color="bg-[#FEC05C] ml-[60vw] rotate-[-35.55deg]" />
              </div>
              <div ref={mobileMarkupBlockD}>
                <Block color="bg-[#97B1B2] mt-8 ml-[10vw] rotate-[-18.16deg]" />
              </div>
              <div ref={mobileMarkupBlockE}>
                <Block color="bg-[#0165B1] mt-16 ml-[17vw] rotate-[10deg]" />
              </div>
              <div ref={mobileMarkupBlockF}>
                <Block color="bg-[#D12510] mt-8 ml-[56vw] rotate-[108deg] -translate-y-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='overflow-hidden'>
        <div className="flex ml-[20vw] lg:ml-[36.5vw]">
          <Block color='bg-[#0165B1]' />
          <Block color='bg-[#FEC05C]' />
        </div>
        <div className="flex ml-[4.8vw]">
          <Block color='bg-[#D12510]/60' />
          <Block color='bg-[#FEC05C]/60' />
          <Block color='bg-black/60' />
          <Block color='hidden lg:block bg-[#D12510]/60' />
        </div>
        <div className="flex ml-[-4.8vw]">
          <Block color='bg-black/30' />
          <Block color='bg-[#0165B1]/30' />
          <Block color='bg-[#97B1B2]/30' />
          <Block color='bg-[#0165B1]/30' />
          <Block color='bg-[#FEC05C]/30' />
        </div>
        <div className="flex ml-[-14.4vw]">
          <Block color='bg-[#D12510]/20' />
          <Block color='bg-[#FEC05C]/20' />
          <Block color='bg-[#97B1B2]/20' />
          <Block color='bg-[#0165B1]/20' />
          <Block color='bg-[#FEC05C]/20' />
          <Block color='bg-[#D12510]/20' />
        </div>
      </div>

      {/* Panel section */}
      <div className="relative bg-brand-bg px-0 sm:px-5 2xl:px-0 w-screen">
        <div className='absolute grid grid-cols-3 lg:grid-cols-4 max-w-[1350px] mx-auto px-4 sm:px-10 inset-0'>
          <div className='border-l border-white/30 border-dashed'></div>
          <div className='border-x border-white/30 border-dashed'></div>
          <div className='border-r border-white/30 border-dashed'></div>
          <div className='hidden lg:block border-r border-white/30 border-dashed'></div>
        </div>
        <section className='flex flex-col items-center -translate-y-10 xl:-translate-y-[5.5rem]'>
          <div className='relative w-full max-w-[1204px] rounded-[68px] p-10 backdrop-blur-[128px] border border-[#e2ffd125]
          [@supports(backdrop-filter:blur(0))]:backdrop-blur-[128px] [@supports(backdrop-filter:blur(0))]:[background:linear-gradient(-24.39deg,rgba(255,255,255,0.024)_35.54%,rgba(123,245,93,.15)_75.25%)] [background:linear-gradient(#afbdac_-15%,#263822_20%,rgba(255,255,255,.05))] scale-x-[1.01] md:scale-x-100'>
            <h2 ref={panelHeader} className='md:mt-12 lg:mt-20 2xl:mt-24 text-center text-5xl sm:text-6xl lg:text-7xl font-black text-[#EFFFE2]'>top audit scores</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-4 mt-10 lg:mt-14 mb-16 lg:mb-24'>
              <Circle delay={500} />
              <Circle delay={800} />
              <Circle delay={1100} />
              <Circle delay={1400} />
            </div>
            <p ref={panelText} className='relative mx-auto text-base md:text-2xl lg:text-[26px] max-w-3xl text-transparent lg:leading-10 mb-24 lg:mb-48
            bg-gradient-to-br from-[#c5ffc0] to-white/80 bg-clip-text'>
              Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.<br /><br />Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.<br /><br />A Jamstack website, delivering SEO-friendly, lean {'&'} clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
          </div>
          {/* Footer */}
          <div ref={footerText} className='relative space-y-5 mt-60 mb-48'>
            <p className='text-2xl text-white text-center'>This is a design test by Benton Boychuk-Chorney for Monogram.</p>
            <img src='/assets/heart.svg' className='mx-auto animate-pulse' />
          </div>
        </section>
      </div >
    </>
  );
};

function Block({ color, noScale }: { color: string, noScale?: boolean; }) {
  if (noScale) return <div className={`w-[21vw] h-[3.8vw] rounded-[.5vw] 2xl:w-[320px] 2xl:h-[57px] ${color}`}></div>;
  return <div className={`w-[32vw] h-[6vw] lg:w-[21vw] lg:h-[3.8vw] rounded-[.5vw] ${color}`}></div>;
}


