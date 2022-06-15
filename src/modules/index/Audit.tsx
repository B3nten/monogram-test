import { useAnimateIn } from "@src/common/hooks/useAnimateIn";
import { Circle } from "./Circle";

export function Audit() {

    // Desktop or hybrid elements
    const panelHeader = useAnimateIn();
    const panelText = useAnimateIn({ threshold: .25 });
    const footerText = useAnimateIn({ threshold: .5 });

    return (
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
                        <Circle delay={0} />
                        <Circle delay={0} />
                        <Circle delay={0} />
                        <Circle delay={0} />
                    </div>
                    <p ref={panelText} className='relative mx-auto text-base md:text-2xl lg:text-[26px] max-w-3xl text-transparent lg:leading-10 mb-24 lg:mb-48
            bg-gradient-to-br from-[#c5ffc0] to-white/80 bg-clip-text'>
                        Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.<br /><br />Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.<br /><br />A Jamstack website, delivering SEO-friendly, lean {'&'} clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
                </div>
                {/* Footer */}
                <div ref={footerText} className='relative space-y-5 mt-60 mb-48'>
                    <p className='text-2xl text-white text-center'>This is a design test by Benton Boychuk-Chorney for Monogram.</p>
                    <img src='/assets/heart.svg' className='mx-auto animate-pulse' alt='Heart icon' />
                </div>
            </section>
        </div >
    );
}