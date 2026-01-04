import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = 'domains@login.thegoated.dev';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-2xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Interested in this domain?
        </h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-lg md:text-xl text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>{email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
