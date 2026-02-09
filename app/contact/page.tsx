'use client';

import Image from "next/image";
import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newsletterEmail) return;

    // TODO: Implement actual newsletter subscription logic
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen text-white relative" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Background Image Overlay with 10% Opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/new-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Header />

        {/* Hero Section with Title */}
        <section className="pt-32 md:pt-40 pb-8 md:pb-12 px-4">
          <div className="w-full max-w-7xl mx-auto flex justify-center">
            <div
              className="inline-block px-8 md:px-12 py-4 md:py-5"
              style={{
                border: '1px solid white',
                borderRadius: '4px',
              }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">CONTACT US</h1>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">

              {/* Left Column - Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Information</h2>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@westerninnovationtech.com" className="text-lg md:text-xl hover:text-[#FFCC33] transition-colors">
                    info@westerninnovationtech.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+2347076958837" className="text-lg md:text-xl hover:text-[#FFCC33] transition-colors">
                    +234 707 695 8837
                  </a>
                </div>

                {/* Social Media Icons */}
                <div className="pt-6 md:pt-8">
                  <div className="flex items-center gap-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/facebook.png"
                        alt="Facebook"
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/insta.png"
                        alt="Instagram"
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/x.png"
                        alt="X"
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8"
                      />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/linkedin.png"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white px-0 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFCC33] transition-colors"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white px-0 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFCC33] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full bg-transparent border border-white rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFCC33] transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Status Message */}
                  {submitStatus === 'success' && (
                    <p className="text-green-400 text-sm">✓ Message sent successfully! We'll get back to you soon.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-400 text-sm">✗ {errorMessage}</p>
                  )}
                  {submitStatus === 'loading' && (
                    <p className="text-[#FFCC33] text-sm">⏳ Sending message...</p>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="bg-[#FFCC33] text-black px-8 md:px-10 py-3 rounded-full font-semibold text-base hover:bg-[#FFCC33]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'loading' ? 'Sending...' : 'Send message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="w-full max-w-4xl mx-auto">
            <div
              className="px-6 md:px-12 py-8 md:py-12 rounded-2xl"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(26, 26, 26, 0.5)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left - Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe To Our Newsletter</h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Subscribe to get updates right in your inbox
                  </p>
                </div>

                {/* Right - Form */}
                <div>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white px-0 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFCC33] transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#FFCC33] text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-[#FFCC33]/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
