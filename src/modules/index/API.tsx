import { useAnimateIn } from '@src/common/hooks/useAnimateIn'
import { useGPU } from '@src/common/hooks/useGPU'
import { Ball } from './Ball'
import { Parallax } from 'react-scroll-parallax'

export function API() {
	const gpu = useGPU()
	const apiHeader = useAnimateIn()
	const apiText = useAnimateIn()

	return (
		<div className="relative  mt-[-15rem] w-full sm:mt-[-20rem] md:mt-[-28rem] lg:mt-[-32rem] xl:mt-[-38rem]">
			{/* Display grid */}
			<div className="absolute inset-0 -z-30 w-screen bg-brand-bg"></div>
			<div className="absolute inset-0 -z-20 mx-auto  grid max-w-[1350px] grid-cols-2 px-4 sm:grid-cols-3 sm:px-10 lg:grid-cols-4">
				<div className="border-l border-dashed border-white/30"></div>
				<div className="border-x border-dashed border-white/30"></div>
				<div className="hidden border-r border-dashed border-white/30 sm:block"></div>
				<div className="hidden border-r border-dashed border-white/30 lg:block"></div>
			</div>
			<section>
				{/* Logo grid */}
				{/* translate-z used to engage GPU - fixes pixelation on Safari */}
				<div
					className="relative -z-20 mx-auto grid max-w-7xl grid-cols-2 px-4 pb-4 sm:grid-cols-3 sm:px-10 
                lg:grid-cols-4 [&>div>img]:[transform:translateZ(0)_scale(1.25)]"
					aria-hidden="true"
				>
					<div>
						<Parallax speed={-20}>
							<img
								className="mt-32 sm:mt-72 md:mt-96 "
								src="/assets/logos/react.svg"
								alt="React.js logo"
							/>
						</Parallax>
						<Parallax speed={-10}>
							<img className="mt-56" src="/assets/logos/svelte.svg" alt="Svelte logo" />
						</Parallax>
					</div>
					<div>
						<Parallax speed={-8}>
							<img
								className="mt-64 sm:mt-96 md:mt-[30rem]"
								src="/assets/logos/next.svg"
								alt="Next.js logo"
							/>
						</Parallax>
						<Parallax speed={8}>
							<img
								className="mt-48 sm:hidden md:mt-[20rem] lg:mt-[50rem]"
								src="/assets/logos/vue.svg"
								alt="Vue.js logo"
							/>
						</Parallax>
						<Parallax speed={8}>
							<img
								className="hidden lg:mt-60 lg:block"
								src="/assets/logos/react_dim.svg"
								alt="React.js logo"
							/>
						</Parallax>
					</div>
					{/* Medium and up*/}
					<div className="hidden sm:block">
						<Parallax speed={10}>
							<img
								className="mt-[12rem] md:mt-[20rem] lg:mt-[50rem]"
								src="/assets/logos/vue.svg"
								alt="Vue.js logo"
							/>
						</Parallax>
						<Parallax speed={-10}>
							<img
								className="mt-[10rem] md:mt-36 lg:hidden"
								src="/assets/logos/react_dim.svg"
								alt="React.js logo"
							/>
						</Parallax>
						<Parallax speed={5}>
							<img
								className="mt-24 opacity-30 md:mt-20 md:hidden"
								src="/assets/logos/next.svg"
								alt="Next.js logo"
							/>
						</Parallax>
					</div>
					{/* Large and up */}
					<div className="hidden overflow-clip lg:block">
						<Parallax speed={-28}>
							<img
								className="translate-x-10 md:mt-20"
								src="/assets/logos/next.svg"
								alt="Next.js logo"
							/>
						</Parallax>
						<Parallax speed={-16}>
							<img className="md:mt-48" src="/assets/logos/react.svg" alt="React.js logo" />
						</Parallax>
						<Parallax speed={12}>
							<img
								className="pb-10 md:mt-80"
								src="/assets/logos/svelte_dim.svg"
								alt="Svelte logo"
							/>
						</Parallax>
					</div>
				</div>
				{/* Ball */}
				<div className="relative mt-10 flex flex-col items-center sm:pb-20 md:pb-40">
					{/* Background curve */}
					<div className="absolute top-1/2 bottom-0 -z-10 flex w-screen flex-col">
						<img src="/assets/squiggly.svg" className="w-full" alt="" />
						<div className="basis-[110%] bg-white"></div>
					</div>
					<h1
						ref={apiHeader}
						className="text-center text-6xl font-black text-white lg:text-[133px] "
					>
						api
					</h1>
					<p
						ref={apiText}
						className="mt-10 mb-16 max-w-[85%] text-center text-white md:max-w-[730px] lg:mb-40 lg:text-2xl "
					>
						At build time, a Jamstack website uses data from one or more APIs to generate markup.
						These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local
						JSON file!
					</p>
					<div className="relative mx-auto lg:px-0">
						<div className="mx-auto aspect-square w-full max-w-[914px]">
							{/* // Render ball loader if GPU is strong enough / not a mobile device  */}
							{gpu.tier > 1 && <Ball />}
							{/* Or else render the image */}
							{gpu.tier < 2 && <img src="/assets/ball.webp" alt="" className="px-2" />}
						</div>
						{/* Background glow effect */}
						<div
							className="absolute inset-0 -z-10 -translate-y-5 -translate-x-5 animate-blob rounded-full bg-gradient-to-tr 
              from-blue-600 to-purple-700 blur-3xl lg:-inset-2 lg:-translate-y-10 lg:-translate-x-10 lg:blur-[128px]"
						></div>
						<div className="absolute inset-2 -z-10 -translate-y-4 -translate-x-4 animate-blob rounded-full bg-white blur-xl lg:inset-0 lg:-translate-y-8 lg:-translate-x-8 lg:blur-2xl"></div>
					</div>
				</div>
			</section>
		</div>
	)
}
