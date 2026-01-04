import { Linkedin, Globe, Github } from "lucide-react";

interface SocialLink {
	name: string;
	url: string;
	icon: React.ReactNode;
	label: string;
}

const socialLinks: SocialLink[] = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/thomas-nearlunar/",
		icon: <Linkedin className="w-5 h-5" />,
		label: "Professional Profile",
	},
	{
		name: "Portfolio",
		url: "https://thegoated.dev",
		icon: <Globe className="w-5 h-5" />,
		label: "Personal Website",
	},
	{
		name: "GitHub",
		url: "https://github.com/TheGoatedDev",
		icon: <Github className="w-5 h-5" />,
		label: "Open Source Work",
	},
];

const SocialLinks = () => {
	return (
		<section className="w-full px-6 py-16">
			<div className="max-w-7xl mx-auto">
			{/* Section header */}
			<div className="mb-12 animate-slide-up">
				<div className="flex items-center gap-4 mb-6">
					<div className="h-0.5 w-16 bg-accent-gradient"></div>
					<span className="text-xs uppercase tracking-widest text-gray-600 font-medium">
						Connect
					</span>
				</div>
				<h3 className="text-3xl md:text-4xl font-extralight text-gray-900">
					Find me elsewhere
				</h3>
			</div>

				{/* Social links grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
					{socialLinks.map((link, index) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative bg-white rounded-xl shadow-elegant border-elegant p-6 transition-elegant hover:shadow-elegant-lg hover:scale-[1.02]"
							style={{ animationDelay: `${0.1 + index * 0.05}s` }}
						>
						{/* Accent line on hover */}
						<div className="absolute top-0 left-0 w-0 h-0.5 bg-accent-gradient group-hover:w-full transition-all duration-500"></div>
							
							<div className="flex items-start justify-between mb-4">
								<div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:text-purple-600 group-hover:bg-purple-50 transition-elegant">
									{link.icon}
								</div>
								<svg 
									className="w-4 h-4 text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
									fill="none" 
									viewBox="0 0 24 24" 
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
								</svg>
							</div>
							
						<div>
							<h4 className="text-xl font-light text-gray-900 mb-1">
								{link.name}
							</h4>
							<p className="text-sm text-gray-600 font-normal">
								{link.label}
							</p>
						</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default SocialLinks;
