import { Linkedin, Globe, Github } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thomas-nearlunar/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Portfolio',
    url: 'https://thegoated.dev',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/TheGoatedDev',
    icon: <Github className="w-5 h-5" />,
  },
];

const SocialLinks = () => {
  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">
          Connect with me
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 text-gray-700 hover:text-indigo-600 font-medium"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
