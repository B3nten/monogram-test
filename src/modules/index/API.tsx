import { useAnimateIn } from "@src/common/hooks/useAnimateIn";
import { useGPU } from "@src/common/hooks/useGPU";
import { Ball } from "./Ball";
import { Parallax } from "react-scroll-parallax";

export function API() {

    const gpu = useGPU();
    const apiHeader = useAnimateIn();
    const apiText = useAnimateIn();

    return (
        <div className="relative  mt-[-15rem] sm:mt-[-20rem] md:mt-[-28rem] lg:mt-[-32rem] xl:mt-[-38rem] w-full">
            {/* Display grid */}
            <div className='absolute inset-0 w-screen bg-brand-bg -z-30'></div>
            <div className='absolute grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 max-w-[1350px] mx-auto px-4 sm:px-10 inset-0 -z-20'>
                <div className='border-l border-white/30 border-dashed'></div>
                <div className='border-x border-white/30 border-dashed'></div>
                <div className='hidden sm:block border-r border-white/30 border-dashed'></div>
                <div className='hidden lg:block border-r border-white/30 border-dashed'></div>
            </div>
            <section>
                {/* Logo grid */}
                <div className='relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pb-4 max-w-7xl mx-auto px-4 sm:px-10 
                [&>div>img]:[transform:translateZ(0)_scale(1.25)] -z-20' aria-hidden="true">
                    <div>
                        <Parallax speed={-20}>
                            <img className='mt-32 sm:mt-72 md:mt-96 ' src='/assets/logos/react.svg' alt='React.js logo' />
                        </Parallax>
                        <Parallax speed={-10}>
                            <img className='mt-56' src='/assets/logos/svelte.svg' alt='Svelte logo' />
                        </Parallax>
                    </div>
                    <div>
                        <Parallax speed={-8}>
                            <img className='mt-64 sm:mt-96 md:mt-[30rem]' src='/assets/logos/next.svg' alt='Next.js logo' />
                        </Parallax>
                        <Parallax speed={8}>
                            <img className='sm:hidden mt-48 md:mt-[20rem] lg:mt-[50rem]' src='/assets/logos/vue.svg' alt='Vue.js logo' />
                        </Parallax>
                        <Parallax speed={8}>
                            <img className='hidden lg:mt-60 lg:block' src='/assets/logos/react_dim.svg' alt='React.js logo' />
                        </Parallax>
                    </div>
                    <div className='hidden sm:block'>
                        <Parallax speed={10}>
                            <img className='mt-[12rem] md:mt-[20rem] lg:mt-[50rem]' src='/assets/logos/vue.svg' alt='Vue.js logo' />
                        </Parallax>
                        <Parallax speed={-10}>
                            <img className='mt-[10rem] md:mt-36 lg:hidden' src='/assets/logos/react_dim.svg' alt='React.js logo' />
                        </Parallax>
                        <Parallax speed={5}>
                            <img className='mt-24 md:mt-20 opacity-30 md:hidden' src='/assets/logos/next.svg' alt='Next.js logo' />
                        </Parallax>
                    </div>
                    <div className='hidden lg:block overflow-clip'>
                        <Parallax speed={-28}>
                            <img className='md:mt-20 translate-x-10' src='/assets/logos/next.svg' alt='Next.js logo' />
                        </Parallax>
                        <Parallax speed={-16}>
                            <img className='md:mt-48' src='/assets/logos/react.svg' alt='React.js logo' />
                        </Parallax>
                        <Parallax speed={12}>
                            <img className='md:mt-80 pb-10' src='/assets/logos/svelte_dim.svg' alt='Svelte logo' />
                        </Parallax>
                    </div>
                </div>
                {/* Ball */}
                <div className='relative flex flex-col items-center sm:pb-20 md:pb-40 mt-10'>
                    <div className='absolute w-screen top-1/2 bottom-0 flex flex-col -z-10'>
                        <img src='/assets/squiggly.svg' className='w-full' alt='' />
                        <div className='bg-white basis-[110%]'></div>
                    </div>
                    <h1 ref={apiHeader} className='text-6xl lg:text-[133px] text-white font-black text-center '>api</h1>
                    <p ref={apiText} className='max-w-[85%] md:max-w-[730px] lg:text-2xl text-white text-center mt-10 mb-16 lg:mb-40 '>At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
                    <div className="relative mx-auto lg:px-0">
                        <div className="mx-auto w-full max-w-[914px] aspect-square">
                            {/* // Render ball loader if GPU is strong enough  */}
                            {!gpu.isMobile && gpu.tier > 1 && <Ball />}
                            {/* Or else render the image */}
                            {(gpu.isMobile || gpu.tier < 2) && <img src='/assets/ball.webp' alt='' className='px-2' />}
                        </div>
                        <div className='absolute inset-0 lg:-inset-2 bg-gradient-to-tr from-blue-600 to-purple-700 -z-10 rounded-full 
              lg:blur-[128px] blur-3xl -translate-y-5 lg:-translate-y-10 -translate-x-5 lg:-translate-x-10 animate-blob'></div>
                        <div className='absolute inset-2 lg:inset-0 bg-white -z-10 rounded-full blur-xl lg:blur-2xl -translate-y-4 lg:-translate-y-8 -translate-x-4 lg:-translate-x-8 animate-blob'></div>
                    </div>
                </div >
            </section >
        </div >
    );
}