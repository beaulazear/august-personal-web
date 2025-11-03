import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Linkedin, Github, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactModern() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [touched, setTouched] = useState({
    from_name: false,
    from_email: false,
    message: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    if (formData.from_email && touched.from_email) {
      setEmailValid(validateEmail(formData.from_email));
    }
  }, [formData.from_email, touched.from_email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
    setSuccess('');
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.from_email)) {
      setError('Please enter a valid email address');
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

      setSuccess('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ from_name: '', from_email: '', message: '' });
      setTouched({ from_name: false, from_email: false, message: false });
      setEmailValid(null);
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly at beaulazear@gmail.com');
      console.error('Email error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.from_name && formData.from_email && formData.message && emailValid;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-100 text-brand-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-4">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <div className="glass-effect rounded-3xl p-6 hover-lift group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-gray-800 mb-2">Email</h3>
              <a
                href="mailto:beaulazear@gmail.com"
                className="text-brand-600 hover:text-brand-700 font-medium text-sm break-all"
              >
                beaulazear@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="glass-effect rounded-3xl p-6 hover-lift group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-gray-800 mb-2">Phone</h3>
              <a
                href="tel:+17186141878"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                +1 (718) 614-1878
              </a>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-3xl p-6 hover-lift">
              <h3 className="font-heading font-bold text-gray-800 mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/beau-lazear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/beaulazear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="text-white" size={20} />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-3xl p-8 hover-lift">
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="text-gray-400" size={20} />
                    </div>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('from_name')}
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="from_email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="text-gray-400" size={20} />
                    </div>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('from_email')}
                      disabled={isSubmitting}
                      className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:ring-4 transition-all outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed font-medium ${
                        emailValid === false && touched.from_email
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                          : emailValid === true
                          ? 'border-green-400 focus:border-green-500 focus:ring-green-100'
                          : 'border-gray-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                      placeholder="john@example.com"
                      required
                    />
                    {touched.from_email && formData.from_email && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        {emailValid ? (
                          <CheckCircle className="text-green-500" size={20} />
                        ) : (
                          <AlertCircle className="text-red-500" size={20} />
                        )}
                      </div>
                    )}
                  </div>
                  {emailValid === false && touched.from_email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      Please enter a valid email address
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                      <MessageSquare className="text-gray-400" size={20} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed resize-vertical font-medium"
                      placeholder="Tell me about your project or just say hi..."
                      required
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-500 text-right">
                    {formData.message.length} characters
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-green-700 text-sm font-medium">{success}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
