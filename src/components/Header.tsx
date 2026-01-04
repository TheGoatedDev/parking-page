const Header = () => {
	return (
		<header className="w-full px-6 py-8 md:py-12">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center gap-4">
					<span className="text-3xl md:text-4xl" role="img" aria-label="Goat logo">
						🐐
					</span>
					<div>
						<h1 className="text-xl md:text-2xl font-light text-gray-900 tracking-tight">
							TheGoatedDev
						</h1>
						<div className="h-px w-12 bg-gradient-to-r from-purple-600 to-transparent mt-1"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
