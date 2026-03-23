import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactWindow = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setError('All fields required');
      return;
    }

    if (!validateEmail(formData.from_email)) {
      setError('Invalid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_u8xn3gg',
        'template_4j1d1wr',
        formData,
        'q77xqkQEkLd44CoeS'
      );

      setSuccess('Message sent! I\'ll get back to you soon.');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (err) {
      setError('Failed to send. Email me at beaulazear@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Terminal header */}
      <div className="text-terminal-green text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-terminal-amber">beau@portfolio</span>
          <span className="text-window-text">:</span>
          <span className="text-terminal-blue">~/contact</span>
          <span className="text-window-text">$</span>
          <span className="ml-2">./send_message.sh</span>
        </div>
      </div>

      {/* Contact Links */}
      <div className="space-y-3 text-base font-medium">
        <div className="flex items-center gap-2 text-window-text">
          <Mail size={18} className="text-terminal-green" />
          <a href="mailto:beaulazear@gmail.com" className="hover:text-terminal-green transition-colors">
            beaulazear@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-window-text">
          <Linkedin size={18} className="text-terminal-blue" />
          <a href="https://www.linkedin.com/in/beaulazear/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-blue transition-colors">
            linkedin.com/in/beaulazear
          </a>
        </div>
        <div className="flex items-center gap-2 text-window-text">
          <Github size={18} className="text-terminal-amber" />
          <a href="https://github.com/beaulazear" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-amber transition-colors">
            github.com/beaulazear
          </a>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-terminal-green text-base mb-2 font-semibold">
            <span className="text-terminal-amber font-bold">$</span> NAME:
          </label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full bg-window-bg-light border-2 border-window-border rounded px-4 py-3 text-window-text font-mono text-base focus:border-terminal-green focus:outline-none transition-colors"
            placeholder="Your name..."
          />
        </div>

        <div>
          <label className="block text-terminal-green text-base mb-2 font-semibold">
            <span className="text-terminal-amber font-bold">$</span> EMAIL:
          </label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className="w-full bg-window-bg-light border-2 border-window-border rounded px-4 py-3 text-window-text font-mono text-base focus:border-terminal-green focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-terminal-green text-base mb-2 font-semibold">
            <span className="text-terminal-amber font-bold">$</span> MESSAGE:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full bg-window-bg-light border-2 border-window-border rounded px-4 py-3 text-window-text font-mono text-base focus:border-terminal-green focus:outline-none transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Status Messages */}
        {error && (
          <div className="flex items-center gap-2 text-terminal-red text-base font-semibold">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 text-terminal-green text-base font-semibold">
            <CheckCircle size={18} />
            <span>{success}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-terminal-green hover:bg-terminal-green-dim text-black font-mono font-bold py-3 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="pt-4 text-sm text-gray-400 border-t border-window-border font-medium">
        <span className="text-terminal-green font-bold">$</span>
        <span className="ml-2">Press Ctrl+C to cancel</span>
      </div>
    </div>
  );
};

export default ContactWindow;
