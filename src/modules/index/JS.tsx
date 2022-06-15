import { useAnimateIn } from '@src/common/hooks/useAnimateIn'

export function JS() {
	const jsHeader = useAnimateIn()
	const jsText = useAnimateIn()

	return (
		<section className="mt-10">
			<div className="lg:space-y-18 flex flex-col items-center space-y-[5vw] px-4 sm:space-y-10 md:space-y-12 xl:space-y-20">
				{/* Background image */}
				<div className="absolute -z-10 px-2 md:px-4 2xl:px-0">
					<img src="/assets/orange_square.webp" alt="" />
				</div>
				{/* Arrow, disabled on smaller screens */}
				<img
					className="absolute right-[9.5vw] top-[10.5vw] hidden h-[30vw] w-[16vw] lg:block 2xl:right-36 2xl:top-40 2xl:h-auto 2xl:w-auto"
					src="/assets/jsarrow.svg"
				/>
				<h2
					ref={jsHeader}
					className="text-4xl font-black text-white md:text-6xl lg:text-8xl xl:text-[133px]"
				>
					javascript
				</h2>
				<p
					ref={jsText}
					className="max-w-md text-sm font-light text-white sm:text-lg md:max-w-[586px] md:leading-loose "
				>
					Statically generated pages are brought to life with client-side JavaScript libraries and
					frameworks, such as Algolia and Next.js.
				</p>
				{/* Computer image */}
				<img
					className="relative z-10 w-[50vw] md:w-[60vw] xl:w-auto"
					src="/assets/computer.webp"
					alt="A computer with computer code displayed"
				/>
			</div>
		</section>
	)
}
