const Hero = () => {
	return (
		<section className="w-full px-6 py-16 md:py-24">
			<div className="max-w-7xl mx-auto">
				{/* Asymmetric layout - left aligned with visual accent */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					<div className="lg:col-span-8 animate-fade-in">
						{/* Small accent line */}
						<div className="flex items-center gap-4 mb-8">
							<div className="h-0.5 w-16 bg-accent-gradient"></div>
							<span className="text-xs uppercase tracking-widest text-gray-600 font-medium">
								Domain Inquiry
							</span>
						</div>

						{/* Main heading with dramatic hierarchy */}
						<h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-gray-900 leading-[0.95] mb-8 tracking-tight">
							This Domain
							<br />
							<span className="font-normal">May Be</span>
							<br />
							<span className="font-light italic">Available</span>
						</h2>

						{/* Description with proper spacing */}
						<div className="max-w-xl">
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-4">
								I own this domain and may or may not use it in the future.
							</p>
							<p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
								If you're interested in acquiring it, feel free to reach out.
							</p>
						</div>
					</div>

					{/* Visual accent column */}
					<div className="lg:col-span-4 hidden lg:block">
						<div className="relative">
							<div className="absolute inset-0 bg-accent-gradient opacity-20 rounded-2xl transform rotate-3"></div>
							<div className="relative p-8 space-y-6">
								<div className="space-y-2">
									<div className="h-1.5 w-24 bg-gray-400 rounded-full"></div>
									<div className="h-1.5 w-16 bg-gray-400 rounded-full"></div>
								</div>
								<div className="space-y-2">
									<div className="h-1.5 w-32 bg-gray-400 rounded-full"></div>
									<div className="h-1.5 w-20 bg-gray-400 rounded-full"></div>
								</div>
								<div className="space-y-2">
									<div className="h-1.5 w-28 bg-gray-400 rounded-full"></div>
									<div className="h-1.5 w-24 bg-gray-400 rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Subtle branding reference */}
				<div className="mt-8 lg:mt-16">
					<p className="text-sm text-gray-600 tracking-wide font-normal">
						Powered by{" "}
						<span className="text-gray-900 font-medium">TheGoatedDev</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
