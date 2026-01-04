import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import SocialLinks from "./components/SocialLinks";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
			<Header />
			<main className="pb-16">
				<Hero />
				<ContactSection />
				<SocialLinks />
			</main>
			<footer className="w-full px-4 py-8 text-center text-gray-500 text-sm">
				<p>© {new Date().getFullYear()} TheGoatedDev. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;
