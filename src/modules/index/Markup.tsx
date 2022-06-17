import { useAnimateIn } from '@src/common/hooks/useAnimateIn'

export function Markup() {
	// Desktop or hybrid elements
	const markupHeader = useAnimateIn()
	const markupText = useAnimateIn()
	const markupBlockA = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const markupBlockB = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const markupBlockC = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})

	// Mobile elements
	const mobileMarkupHeader = useAnimateIn()
	const mobileMarkupText = useAnimateIn()
	const mobileMarkupBlockA = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const mobileMarkupBlockB = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const mobileMarkupBlockC = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const mobileMarkupBlockD = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const mobileMarkupBlockE = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})
	const mobileMarkupBlockF = useAnimateIn({
		animation: 'blockAnimation',
		base: 'blockBase',
		threshold: 0.5
	})

	return (
		<section>
			<div className="mt-10 hidden flex-col items-start p-1 sm:flex sm:px-4 2xl:px-0">
				<h2
					ref={markupHeader}
					className=" text-5xl font-black leading-[1.15] tracking-tight sm:text-8xl md:ml-[8vw] lg:text-[133px] 2xl:ml-32"
				>
					markup
				</h2>
				<div className="mt-16 grid grid-cols-2 gap-4 lg:gap-8">
					<div>
						<p
							ref={markupText}
							className="mt-5 max-w-md text-sm text-[#414141] sm:max-w-[480px] sm:text-base md:ml-[8vw] lg:text-lg 2xl:ml-32 2xl:text-2xl"
						>
							When ready for deployment, a static-site generator such as Astro or Next.js is used to
							compile the website. The end result is a collection of pre-rendered HTML pages that
							can be delivered lightning-fast over a CDN like Vercel’s Edge Network.
						</p>
						{/* floating blocks */}
						<div className="mt-10 lg:mt-20 xl:mt-32">
							<div ref={markupBlockA}>
								<Block noScale color="bg-[#0165B1] ml-[16.4vw] 2xl:ml-[248px] rotate-[-16.91deg]" />
							</div>
							<div ref={markupBlockB}>
								<Block
									noScale
									color="bg-[#D12510] mt-32 ml-[3.8vw] 2xl:ml-[58px] rotate-[14.16deg]"
								/>
							</div>
							<div ref={markupBlockC}>
								<Block
									noScale
									color="bg-[#FEC05C] mt-10 ml-[25.6vw] 2xl:ml-[416px] -translate-y-20 rotate-[-58.55deg]"
								/>
							</div>
						</div>
					</div>
					{/* blocks */}
					<div aria-hidden="true">
						<div className="flex space-x-[3vw] 2xl:space-x-[46px] [@media_screen_and_(max-width:1350px)]:mt-32 [@media_screen_and_(max-width:700px)]:mt-12">
							<img
								className="h-[42vw] w-[18vw] rounded-[4.5vw] object-cover 2xl:h-[629px] 2xl:w-[280px] 2xl:rounded-[68px] "
								src="/assets/blocks.webp"
								alt=""
							/>
							<img
								className="mt-[-11vw] h-[44vw] w-[18vw] rounded-[4.5vw] object-cover object-right 2xl:mt-[-171px] 2xl:h-[670px] 2xl:w-[280px] 2xl:rounded-[68px]"
								src="/assets/blocks.webp"
								alt=""
							/>
						</div>
						<div className="ml-[10vw] flex space-x-[2.5vw] opacity-0 2xl:ml-40 2xl:space-x-[40px] [@supports(backdrop-filter:blur(0))]:opacity-100">
							<div className="mt-[-20vw] h-[32vw] w-[18vw] shrink-0 rounded-[5vw] bg-white/30 backdrop-blur-2xl 2xl:mt-[-300px] 2xl:h-[479px] 2xl:w-[280px] 2xl:rounded-[68px]" />
							<div className="mt-[-33vw] h-[44vw] w-[18vw] shrink-0 rounded-[5vw] bg-white/30 backdrop-blur-2xl 2xl:mt-[-500px] 2xl:h-[662px] 2xl:w-[280px] 2xl:rounded-[68px]" />
						</div>
					</div>
				</div>
			</div>
			{/* Mobile View */}
			<div className="p-2 sm:hidden">
				<div className="flex flex-col items-center justify-start">
					<h2
						ref={mobileMarkupHeader}
						className="text-7xl font-black leading-[1.15] tracking-tight sm:text-8xl lg:text-[133px]"
					>
						markup
					</h2>
					<p
						ref={mobileMarkupText}
						className="mt-5 max-w-md text-center text-base text-brand-gray sm:max-w-[549px] sm:text-base md:ml-[12vw] lg:text-lg 2xl:ml-44"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt
						proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus
						sit.
					</p>
					{/* Blocks */}
					<div aria-hidden="true" className="mt-10 mb-10 self-stretch">
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
	)
}

function Block({ color, noScale }: { color: string; noScale?: boolean }) {
	// noScale used for display block elements under markup section
	if (noScale)
		return (
			<div
				className={`h-[3.8vw] w-[21vw] rounded-[.5vw] 2xl:h-[57px] 2xl:w-[320px] ${color}`}
			></div>
		)
	return <div className={`h-[6vw] w-[32vw] rounded-[.5vw] lg:h-[3.8vw] lg:w-[21vw] ${color}`}></div>
}

export function BlockStack() {
	return (
		<div className="overflow-hidden">
			<div className="ml-[20vw] flex lg:ml-[36.5vw]">
				<Block color="bg-[#0165B1]" />
				<Block color="bg-[#FEC05C]" />
			</div>
			<div className="ml-[4.8vw] flex">
				<Block color="bg-[#D12510]/60" />
				<Block color="bg-[#FEC05C]/60" />
				<Block color="bg-black/60" />
				<Block color="hidden lg:block bg-[#D12510]/60" />
			</div>
			<div className="ml-[-4.8vw] flex">
				<Block color="bg-black/30" />
				<Block color="bg-[#0165B1]/30" />
				<Block color="bg-[#97B1B2]/30" />
				<Block color="bg-[#0165B1]/30" />
				<Block color="bg-[#FEC05C]/30" />
			</div>
			<div className="ml-[-14.4vw] flex">
				<Block color="bg-[#D12510]/20" />
				<Block color="bg-[#FEC05C]/20" />
				<Block color="bg-[#97B1B2]/20" />
				<Block color="bg-[#0165B1]/20" />
				<Block color="bg-[#FEC05C]/20" />
				<Block color="bg-[#D12510]/20" />
			</div>
		</div>
	)
}
