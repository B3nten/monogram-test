import { useAnimateIn } from '@src/common/hooks/useAnimateIn'
import { Circle } from './Circle'
import { DisplayGrid } from './DisplayGrid'

export function Audit() {
	// Desktop or hybrid elements
	const panelHeader = useAnimateIn()
	const panelText = useAnimateIn({ threshold: 0.25 })
	const footerText = useAnimateIn({ threshold: 0.5 })

	return (
		<div className="relative w-screen bg-brand-bg px-0 sm:px-5 2xl:px-0">
			{/* Display grid */}
			<DisplayGrid />
			<section className="flex -translate-y-10 flex-col items-center xl:-translate-y-[5.5rem]">
				{/* Checks if backdrop-blur is possible, uses substitute gradient if not */}
				<div
					className="relative w-full max-w-[1204px] scale-x-[1.01] rounded-[68px] border border-[#e2ffd125] p-10
          backdrop-blur-[128px] [background:linear-gradient(#afbdac_-15%,#263822_20%,rgba(255,255,255,.05))] md:scale-x-100 [@supports(backdrop-filter:blur(0))]:backdrop-blur-[128px] [@supports(backdrop-filter:blur(0))]:[background:linear-gradient(-24.39deg,rgba(255,255,255,0.024)_35.54%,rgba(123,245,93,.15)_75.25%)]"
				>
					<h2
						ref={panelHeader}
						className="text-center text-5xl font-black text-[#EFFFE2] sm:text-6xl md:mt-12 lg:mt-20 lg:text-7xl 2xl:mt-24"
					>
						top audit scores
					</h2>
					<div className="mt-10 mb-16 grid grid-cols-2 sm:grid-cols-4 sm:gap-4 lg:mt-14 lg:mb-24">
						<Circle delay={0} />
						<Circle delay={0} />
						<Circle delay={0} />
						<Circle delay={0} />
					</div>
					<p
						ref={panelText}
						className="relative mx-auto mb-24 max-w-3xl bg-gradient-to-br from-[#c5ffc0] to-white/80 bg-clip-text text-base font-bold text-transparent md:text-2xl
            md:font-normal lg:mb-48 lg:text-[26px] lg:leading-10"
					>
						Search engines, business stakeholders, and end-users gauge a website’s value using
						metric tools like Google Lighthouse, which measures site performance, SEO, and
						accessibility.
						<br />
						<br />
						Performance is one of the most difficult scores to get to 100. This is especially true
						in a time when users demand JavaScript-heavy, highly-interactive web experiences.
						<br />
						<br />A Jamstack website, delivering SEO-friendly, lean {'&'} clean HTML in
						milliseconds, promises higher search-engine ranking and a more positive, responsive
						end-user experience.
					</p>
				</div>
				{/* Footer */}
				<div ref={footerText} className="relative mt-60 mb-48 space-y-5 p-4 lg:space-y-[50px]">
					<p className="text-center text-base font-light text-white sm:text-lg lg:text-2xl">
						This is a design test by Benton Boychuk-Chorney for Monogram.
					</p>
					<img src="/assets/heart.svg" className="mx-auto animate-pulse" alt="Heart icon" />
				</div>
			</section>
		</div>
	)
}
