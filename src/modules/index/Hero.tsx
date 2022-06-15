export function Hero() {
	return (
		<section>
			{/* Desktop */}
			<div className="mt-10 hidden flex-col items-start p-1 sm:flex sm:px-4 md:mt-20 lg:mt-36 2xl:px-0">
				<h1 className="text-5xl font-black leading-[1.15] tracking-tight sm:text-8xl md:ml-[8vw] lg:text-[133px] 2xl:ml-32">
					jamstack
					<span className="bg-[url(/assets/text.webp)] bg-cover bg-clip-text bg-bottom text-transparent">
						{' '}
						101
					</span>
				</h1>
				<div className="mt-7 grid grid-cols-2 gap-4 lg:gap-8">
					<div>
						<p className="mt-5 max-w-md text-sm text-brand-gray sm:max-w-[549px] sm:text-base md:ml-[12vw] lg:text-lg 2xl:ml-44">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt
							proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui
							vivamus sit.
						</p>
						<img
							className="mx-auto mt-24 hidden w-[10vw] lg:w-auto [@media_screen_and_(min-width:430px)]:block"
							src="/assets/mouseline.svg"
							alt=""
						/>
					</div>
					<div aria-hidden="true">
						{/* Image cards */}
						<div className="flex space-x-[3vw] 2xl:space-x-[46px] [@media_screen_and_(max-width:1350px)]:mt-32 [@media_screen_and_(max-width:700px)]:mt-12">
							<img
								className="h-[42vw] w-[18vw] 2xl:h-[629px] 2xl:w-[280px]"
								src="/assets/rectangle01.webp"
								alt=""
							/>
							<img
								className="mt-[-11vw] h-[44vw] w-[18vw] 2xl:mt-[-171px] 2xl:h-[670px] 2xl:w-[280px]"
								src="/assets/rectangle02.webp"
								alt=""
							/>
						</div>
						{/* Blur, hidden on platforms that don't support backdrop blur */}
						<div className="ml-[10vw] flex space-x-[2.5vw] opacity-0 2xl:ml-40 2xl:space-x-[40px] [@supports(backdrop-filter:blur(0))]:opacity-100">
							<div className="mt-[-20vw] h-[32vw] w-[18vw] shrink-0 rounded-[5vw] bg-white/30 backdrop-blur-2xl 2xl:mt-[-300px] 2xl:h-[479px] 2xl:w-[280px] 2xl:rounded-[68px]" />
							<div className="mt-[-33vw] h-[44vw] w-[18vw] shrink-0 rounded-[5vw] bg-white/30 backdrop-blur-2xl 2xl:mt-[-500px] 2xl:h-[662px] 2xl:w-[280px] 2xl:rounded-[68px]" />
						</div>
					</div>
					<img
						className="col-span-2 mx-auto mt-[-2rem] w-[50px] [@media_screen_and_(min-width:430px)]:hidden"
						src="/assets/mouseline.svg"
						alt=""
					/>
				</div>
			</div>
			{/* Mobile View */}
			<div className="mt-10 h-screen p-2 sm:hidden">
				<div className="flex h-full flex-col items-center justify-start">
					<h1 className="text-7xl font-black leading-[1.15] tracking-tight sm:text-8xl lg:text-[133px]">
						jamstack
					</h1>
					<span className="bg-[url(/assets/text.webp)] bg-cover bg-clip-text bg-bottom text-8xl font-black text-transparent">
						{' '}
						101
					</span>
					<p className="mt-5 max-w-md text-sm text-brand-gray sm:max-w-[549px] sm:text-base md:ml-[12vw] lg:text-lg 2xl:ml-44">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt
						proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus
						sit.
					</p>
					<img className="col-span-2 mx-auto mt-10 h-1/2" src="/assets/mouseline.svg" alt="" />
				</div>
			</div>
		</section>
	)
}
