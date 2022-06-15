import { useAnimateIn } from "@src/common/hooks/useAnimateIn";

export function Markup() {

    // Desktop or hybrid elements
    const markupHeader = useAnimateIn();
    const markupText = useAnimateIn();
    const markupBlockA = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
    const markupBlockB = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });
    const markupBlockC = useAnimateIn({ animation: 'blockAnimation', base: 'blockBase', threshold: .5 });

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
        < section >
            <div className="hidden sm:flex flex-col items-start mt-10 p-1 sm:px-4 2xl:px-0">
                <h1 ref={markupHeader} className=' md:ml-[8vw] 2xl:ml-32 text-5xl sm:text-8xl lg:text-[133px] font-black tracking-tight leading-[1.15]'>
                    markup
                </h1>
                <div className='grid grid-cols-2 mt-16 gap-4 lg:gap-8'>
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
                            <img className='w-[18vw] h-[42vw] 2xl:w-[280px] 2xl:h-[629px] rounded-[68px] object-cover ' src='/assets/blocks.webp' alt='' />
                            <img className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[670px] mt-[-11vw] rounded-[68px] 2xl:mt-[-171px] object-cover object-right' src='/assets/blocks.webp' alt='' />
                        </div>
                        <div className='flex space-x-[2.5vw] 2xl:space-x-[40px] ml-[10vw] 2xl:ml-40 opacity-0 [@supports(backdrop-filter:blur(0))]:opacity-100'>
                            <div className='w-[18vw] h-[32vw] 2xl:w-[280px] 2xl:h-[479px] rounded-[5vw] 2xl:rounded-[68px] mt-[-20vw] 2xl:mt-[-300px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                            <div className='w-[18vw] h-[44vw] 2xl:w-[280px] 2xl:h-[662px] rounded-[5vw] 2xl:rounded-[68px] mt-[-33vw] 2xl:mt-[-500px] shrink-0 bg-white/30 backdrop-blur-2xl' />
                        </div>
                    </div>
                </div>
            </div>;
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
        </section >
    );
}

function Block({ color, noScale }: { color: string, noScale?: boolean; }) {
    if (noScale) return <div className={`w-[21vw] h-[3.8vw] rounded-[.5vw] 2xl:w-[320px] 2xl:h-[57px] ${color}`}></div>;
    return <div className={`w-[32vw] h-[6vw] lg:w-[21vw] lg:h-[3.8vw] rounded-[.5vw] ${color}`}></div>;
}

export function BlockStack() {

    return (
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
    );
}