import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";

const ContactSection = () => {
	const [copied, setCopied] = useState(false);
	const email = "domains@login.thegoated.dev";

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy email:", err);
		}
	};

	return (
		<section className="w-full px-6 py-16">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Left column - Title */}
					<div className="lg:col-span-4 animate-slide-up">
						<div className="sticky top-32">
							<h3 className="text-4xl md:text-5xl font-extralight text-gray-900 leading-tight">
								Interested in
								<br />
								<span className="font-light">this domain?</span>
							</h3>
							<div className="h-0.5 w-24 bg-accent-gradient mt-6"></div>
						</div>
					</div>

					{/* Right column - Contact card */}
					<div className="lg:col-span-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
						<div className="bg-white rounded-2xl shadow-elegant-lg border-elegant p-8 md:p-12 transition-elegant hover:shadow-elegant-lg hover:scale-[1.01]">
						{/* Email display */}
						<div className="mb-8">
							<label className="text-xs uppercase tracking-widest text-gray-600 font-medium mb-3 block">
								Contact Email
							</label>
								<a
									href={`mailto:${email}`}
									className="group flex items-center gap-3 text-2xl md:text-3xl font-light text-gray-900 hover:text-purple-600 transition-elegant"
								>
									<Mail className="w-7 h-7 text-gray-400 group-hover:text-purple-600 transition-elegant flex-shrink-0" />
									<span className="break-all">{email}</span>
								</a>
							</div>

							{/* Divider */}
							<div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent mb-8"></div>

							{/* Copy button */}
							<button
								onClick={handleCopyEmail}
								className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-50 hover:bg-gray-100 border-elegant rounded-xl transition-elegant text-gray-700 hover:text-gray-900"
								aria-label="Copy email address"
							>
								{copied ? (
									<>
										<Check className="w-5 h-5 text-green-600" />
										<span className="font-light">Copied to clipboard</span>
									</>
								) : (
									<>
										<Copy className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-elegant" />
										<span className="font-light">Copy email address</span>
									</>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
