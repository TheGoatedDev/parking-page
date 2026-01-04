import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import SocialLinks from "./components/SocialLinks";

function App() {
	return (
		<div className="min-h-screen texture-overlay">
			<Header />
			<main className="pb-32">
				{/* Generous spacing between sections */}
				<Hero />
				<div className="h-32" />
				<ContactSection />
				<div className="h-24" />
				<SocialLinks />
			</main>
			<footer className="w-full px-4 py-12 text-center">
				<div className="max-w-7xl mx-auto py-12">
					<p className="text-gray-600 text-sm tracking-wide font-normal">
						© {new Date().getFullYear()} TheGoatedDev. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
