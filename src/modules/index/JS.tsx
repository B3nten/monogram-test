import { useAnimateIn } from "@src/common/hooks/useAnimateIn";
import Image from "next/image";

export function JS() {

    const jsHeader = useAnimateIn();
    const jsText = useAnimateIn();

    return (
        <section className='mt-10'>
            <div className="flex flex-col items-center px-4 space-y-[5vw] sm:space-y-10 md:space-y-12 lg:space-y-18 xl:space-y-20">
                {/* <div className="absolute -z-10 px-2 md:px-4 2xl:px-0">
                    <img src='/assets/orange_square.webp' alt='' />
                </div>  */}
                <div className='absolute -z-10 w-full px-2 md:px-4 2xl:px-0 max-w-[1397px] h-[59vw] max-h-[893px]'>
                    <Image layout='fill' src='/assets/orange_square.webp' alt='bg' />
                </div>
                <img className='hidden lg:block absolute h-[30vw] w-[16vw] 2xl:w-auto 2xl:h-auto right-[9.5vw] 2xl:right-36 top-[10.5vw] 2xl:top-40' src='/assets/jsarrow.svg' />
                <h2 ref={jsHeader} className='text-white text-4xl md:text-6xl lg:text-8xl xl:text-[133px] font-black 
          '>javascript</h2>
                <p ref={jsText} className='text-sm sm:text-lg text-white max-w-md md:max-w-[586px] md:leading-loose font-light '>Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
                {/* <img className='w-[50vw] md:w-[60vw] xl:w-auto relative z-10' src='/assets/computer.webp' alt="A computer with computer code displayed" /> */}
                <div className="relative w-[50vw] md:w-[60vw] xl:w-[54vw] 2xl:w-[810px] aspect-square z-10">
                    <Image layout='fill' src='/assets/computer.webp' />
                </div>
            </div>
        </section>
    );
};