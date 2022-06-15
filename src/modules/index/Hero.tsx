export function Hero() {

    return (
        <section>
            {/* Desktop */}
            <div className="hidden sm:flex flex-col items-start mt-10 md:mt-20 lg:mt-36 p-1 sm:px-4 2xl:px-0">
                <h1 className='md:ml-[8vw] 2xl:ml-32 text-5xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
                    jamstack
                    <span className='bg-[url(/assets/text.webp)] bg-bottom bg-cover bg-clip-text text-transparent'> 101</span>
                </h1>
                <div className='grid grid-cols-2 mt-7 gap-4 lg:gap-8'>
                    <div>
                        <p className='md:ml-[12vw] 2xl:ml-44 mt-5 text-sm sm:text-base lg:text-lg max-w-md sm:max-w-[549px] text-brand-gray'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
                        </p>
                        <img className='hidden [@media_screen_and_(min-width:430px)]:block w-[10vw] lg:w-auto mt-24 mx-auto' src='/assets/mouseline.svg' alt='' />
                    </div>
                    <div aria-hidden="true">
                        <div className='flex space-x-[3vw] 2xl:space-x-[46px] [@media_screen_and_(max-width:1350px)]:mt-32 [@media_screen_and_(max-width:700px)]:mt-12'>
                            <img className='w-[18vw] h-[42vw] 2xl:w-[280px] 2xl:h-[629px]' src='/assets/rectangle01.webp' alt='' />
                            <img className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[670px] mt-[-11vw] 2xl:mt-[-171px]' src='/assets/rectangle02.webp' alt='' />
                        </div>
                        <div className='flex space-x-[2.5vw] 2xl:space-x-[40px] ml-[10vw] 2xl:ml-40 opacity-0 [@supports(backdrop-filter:blur(0))]:opacity-100'>
                            <div className='w-[18vw] h-[32vw] 2xl:w-[280px] 2xl:h-[479px] rounded-[5vw] 2xl:rounded-[68px] mt-[-20vw] 2xl:mt-[-300px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                            <div className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[662px] rounded-[5vw] 2xl:rounded-[68px] mt-[-33vw] 2xl:mt-[-500px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                        </div>
                    </div>
                    <img className='[@media_screen_and_(min-width:430px)]:hidden col-span-2 w-[50px] mx-auto mt-[-2rem]' src='/assets/mouseline.svg' alt='' />
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
                    <img className='col-span-2 mx-auto mt-10 h-1/2' src='/assets/mouseline.svg' alt='' />
                </div>
            </div>
        </section>
    );
}