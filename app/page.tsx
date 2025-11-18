'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Navigation */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-[1100px]">
        <div
          className="bg-[#1a1a1a]/40 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between relative"
          style={{
            border: '0.5px solid',
            borderImage: 'linear-gradient(269.63deg, rgba(255, 255, 255, 0.05) 2.68%, #FFFFFF 50.22%, rgba(255, 255, 255, 0.05) 97.75%) 1',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 2px 4px 0px #FFFFFF66 inset, 0px -2px 4px 0px #00000033',
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/western-logo.png"
              alt="Western Innovation"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Nav Links - Centered (Desktop) */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm absolute left-1/2 -translate-x-1/2">
            <li><a href="#" className="text-[#FFCC33] hover:text-[#FFCC33]/80 transition-colors">Home</a></li>
            <li><a href="#" className="text-white hover:text-[#FFCC33] transition-colors">About</a></li>
            <li><a href="#" className="text-white hover:text-[#FFCC33] transition-colors">Services</a></li>
            <li><a href="#" className="text-white hover:text-[#FFCC33] transition-colors">Products</a></li>
            <li><a href="#" className="text-white hover:text-[#FFCC33] transition-colors">Careers</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Contact Button (Desktop) */}
          <button className="hidden lg:block bg-[#FFCC33] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium text-sm md:text-base hover:bg-[#FFCC33]/90 transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden mt-2 bg-[#1a1a1a]/95 rounded-2xl px-6 py-4"
            style={{
              backdropFilter: 'blur(10px)',
              border: '0.5px solid rgba(255, 204, 51, 0.3)',
            }}
          >
            <ul className="space-y-3">
              <li><a href="#" className="block text-[#FFCC33] hover:text-[#FFCC33]/80 transition-colors py-2">Home</a></li>
              <li><a href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">About</a></li>
              <li><a href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">Services</a></li>
              <li><a href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">Products</a></li>
              <li><a href="#" className="block text-white hover:text-[#FFCC33] transition-colors py-2">Careers</a></li>
            </ul>
            <button className="w-full mt-4 bg-[#FFCC33] text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#FFCC33]/90 transition-colors">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[500px] md:min-h-[672px] px-4 py-20 md:py-0"
        style={{
          width: '100vw',
          opacity: 1,
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 26, 26, 0.2)' }}></div>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="font-bold mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Powering Africa&apos;s Future Through<br />
            <span className="text-[#FFCC33]">Technology & Innovation</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10">
            We create <span className="text-[#FFCC33] font-semibold">scalable</span> digital products that drive business <span className="text-[#FFCC33] font-semibold">growth</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#FFCC33] text-black px-6 md:px-8 py-3 md:py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-[#FFCC33]/90 transition-colors">
              Partner With Us
            </button>
            <button className="w-full sm:w-auto border-2 border-[#FFCC33] text-[#FFCC33] px-6 md:px-8 py-3 md:py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-[#FFCC33]/10 transition-colors">
              Explore Our Products
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-bold text-center mb-3 md:mb-4 text-2xl md:text-3xl lg:text-[35px]">
            WHAT WE DO
          </h2>
          <p className="text-center text-base md:text-lg text-gray-400 mb-10 md:mb-16 px-4">
            We build <span className="text-[#FFCC33] font-semibold">smart</span>, <span className="text-[#FFCC33] font-semibold">scalable</span> products and <span className="text-[#FFCC33] font-semibold">empower</span> startups.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-[1100px] mx-auto">
            {/* Software Engineering */}
            <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[4.25px] p-4 md:p-5">
              <div className="w-10 h-16 border-t-[3px] border-[#FFCC33] flex items-center justify-center mb-8 md:mb-10">
                <Image
                  src="/settings.png"
                  alt="Software Engineering"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Software Engineering</h3>
              <p className="text-gray-400 text-sm">
                Robust, scalable engineering that brings your product to life.
              </p>
            </div>

            {/* Product Design & Development */}
            <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[4.25px] p-4 md:p-5">
              <div className="w-10 h-16 border-t-[3px] border-[#FFCC33] flex items-center justify-center mb-8 md:mb-10">
                <Image
                  src="/chart.png"
                  alt="Product Design & Development"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Product Design & Development</h3>
              <p className="text-gray-400 text-sm">
                We turn ideas into user-friendly, market-ready digital products.
              </p>
            </div>

            {/* Innovation Strategies */}
            <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[4.25px] p-4 md:p-5">
              <div className="w-10 h-16 border-t-[3px] border-[#FFCC33] flex items-center justify-center mb-8 md:mb-10">
                <Image
                  src="/calendar.png"
                  alt="Innovation Strategies"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Innovation Strategies</h3>
              <p className="text-gray-400 text-sm">
                Guiding teams with the clarity, insight, and strategy to build smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="font-bold text-center mb-2 text-2xl md:text-3xl lg:text-[35px]">
            FEATURED PRODUCT
          </h2>
          <p className="text-center text-base md:text-lg text-gray-400 mb-8 md:mb-12">
            <span className="text-[#FFCC33] font-semibold">Bookanizer</span> — Beauty & Grooming, Simplified
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-6 md:gap-8 lg:gap-12 w-full max-w-[1107px] mx-auto">
            {/* Left Column - Features */}
            <div className="flex flex-col gap-4 md:gap-[17.16px] w-full">
              {/* Smart Scheduling */}
              <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[14.3px] p-5 md:p-[21.45px] w-full">
                <Image
                  src="/Group 1.png"
                  alt="Smart Scheduling"
                  width={40}
                  height={40}
                  className="mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10"
                />
                <h3 className="text-base md:text-lg font-bold mb-2">Smart Scheduling</h3>
                <p className="text-gray-400 text-sm">
                  Automate bookings and stay organized effortlessly.
                </p>
              </div>

              {/* Seamless Payments */}
              <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[14.3px] p-5 md:p-[21.45px] w-full">
                <Image
                  src="/Group 1.png"
                  alt="Seamless Payments"
                  width={40}
                  height={40}
                  className="mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10"
                />
                <h3 className="text-base md:text-lg font-bold mb-2">Seamless Payments</h3>
                <p className="text-gray-400 text-sm">
                  Withdraw earnings and track your financials in real time.
                </p>
              </div>
            </div>

            {/* Center Column - Phone Mockup */}
            <div className="flex justify-center order-first lg:order-none">
              <Image
                src="/bookanizer-mockup.png"
                alt="Bookanizer App"
                width={300}
                height={600}
                className="w-auto h-[350px] md:h-[450px] lg:h-[500px]"
              />
            </div>

            {/* Right Column - Features */}
            <div className="flex flex-col gap-4 md:gap-[17.16px] w-full">
              {/* Client Insights */}
              <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[14.3px] p-5 md:p-[21.45px] w-full">
                <Image
                  src="/Group 1.png"
                  alt="Client Insights"
                  width={40}
                  height={40}
                  className="mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10"
                />
                <h3 className="text-base md:text-lg font-bold mb-2">Client Insights</h3>
                <p className="text-gray-400 text-sm">
                  Understand your customers and see reviews.
                </p>
              </div>

              {/* Full Control */}
              <div className="hover:border-[#FFCC33]/50 transition-colors border border-[#FFCC3380] rounded-[14.3px] p-5 md:p-[21.45px] w-full">
                <Image
                  src="/Group 1.png"
                  alt="Full Control"
                  width={40}
                  height={40}
                  className="mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10"
                />
                <h3 className="text-base md:text-lg font-bold mb-2">Full Control</h3>
                <p className="text-gray-400 text-sm">
                  Set your hours, manage team, and your services.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <button className="text-[#FFCC33] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm md:text-base">
              GO TO BOOKANIZER
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full max-w-[674px] mx-auto flex flex-col gap-3 md:gap-[14px] mb-8 md:mb-12">
            <h2 className="font-bold text-center text-2xl md:text-3xl lg:text-[35px]">
              ABOUT US
            </h2>
            <p className="text-center text-base md:text-lg text-gray-400 px-4">
              We exist to bridge <span className="text-[#FFCC33] font-semibold">technology</span>, <span className="text-[#FFCC33] font-semibold">creativity</span>, and <span className="text-[#FFCC33] font-semibold">business</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12 w-full max-w-[1040px] mx-auto">
            {/* Left Column - Text Content */}
            <div className="w-full">
              <h3 className="text-[#FFCC33] font-bold text-lg md:text-xl mb-3 md:mb-4">WESTERN INNOVATION TECHNOLOGY</h3>
              <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
                is committed to shaping Africa&apos;s digital future through design, innovation, and purposeful technology.
              </p>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                We partner with founders and businesses to create products people enjoy and businesses rely on.
              </p>
              <button className="border-2 border-[#FFCC33] text-[#FFCC33] px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#FFCC33]/10 transition-colors flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {/* Completed Projects */}
              <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg text-center">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">5+</h4>
                <p className="text-xs md:text-sm text-gray-600">Completed<br />Projects</p>
              </div>

              {/* Ongoing Projects */}
              <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg text-center">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">3</h4>
                <p className="text-xs md:text-sm text-gray-600">On Going<br />Projects</p>
              </div>

              {/* Users Reached */}
              <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg text-center">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">100+</h4>
                <p className="text-xs md:text-sm text-gray-600">Users<br />Reached</p>
              </div>

              {/* Client Satisfaction */}
              <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg text-center">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">95%</h4>
                <p className="text-xs md:text-sm text-gray-600">Client satisfaction<br />Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="w-full max-w-7xl mx-auto">
          {/* Title and Subtitle */}
          <h2 className="font-bold text-center mb-3 md:mb-4 text-2xl md:text-3xl lg:text-[35px]">
            WHY CHOOSE US
          </h2>
          {/* Subtitle and Top Text Container */}
          <div className="w-full max-w-[1122px] mx-auto mb-8 md:mb-12 flex flex-col gap-6 md:gap-8 lg:gap-12">
            <p className="text-center text-base md:text-lg text-gray-400 px-4">
              <span className="text-[#FFCC33] font-semibold">Innovation</span> is powerful - but only when guided by the right <span className="text-[#FFCC33] font-semibold">team</span>.
            </p>

            {/* Top Text Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <p className="text-gray-400 text-sm md:text-base">
                We deliver technology backed by strategy, precision, and proven execution.
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                We combine deep technical expertise with a clear understanding of Africa&apos;s evolving digital landscape.
              </p>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="w-full max-w-[1240px] mx-auto">

            {/* Curved Line Above */}
            <div className="relative mb-6 md:mb-8 hidden md:block">
              <Image
                src="/Lines.png"
                alt=""
                width={1200}
                height={100}
                className="w-full h-auto"
              />
            </div>

            {/* Benefits Grid */}
            <div className="w-full max-w-[910px] mx-auto">
              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-[62px]">
              {/* End-To-End Expertise */}
              <div>
                <h3 className="text-[#FFCC33] font-bold text-lg md:text-xl mb-2 md:mb-3">End-To-End Expertise</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Our team has an in-depth understanding of the USA real estate market.
                </p>
              </div>

              {/* Quality-First Execution */}
              <div>
                <h3 className="text-[#FFCC33] font-bold text-lg md:text-xl mb-2 md:mb-3">Quality-First Execution</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  We believe great products are built on precision — thoughtful design, clean engineering, and reliable performance.
                </p>
              </div>

              {/* African Market Insight */}
              <div>
                <h3 className="text-[#FFCC33] font-bold text-lg md:text-xl mb-2 md:mb-3">African Market Insight</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  We design and engineer solutions grounded in real-world insights, ensuring our products feel relevant, accessible, and impactful across different regions and user groups.
                </p>
              </div>

              {/* Collaborative Approach */}
              <div>
                <h3 className="text-[#FFCC33] font-bold text-lg md:text-xl mb-2 md:mb-3">Collaborative Approach</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  We don&apos;t just deliver projects — we build relationships. With Western Innovation Technology, you&apos;re not just getting a service provider; you&apos;re gaining a committed partner invested in your success.
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-10 md:mt-16 w-full max-w-[1044px] mx-auto flex flex-col gap-6 md:gap-8 lg:gap-[34px] items-center justify-center px-4">
            <p className="text-lg md:text-2xl lg:text-3xl text-center">
              We blend <span className="text-[#FFCC33] font-semibold">technology</span>, <span className="text-[#FFCC33] font-semibold">business</span>, and <span className="text-[#FFCC33] font-semibold">creativity</span> to shape the future of innovation in <span className="text-[#FFCC33] font-semibold">Africa</span>.
            </p>
            <button className="bg-[#FFCC33] text-black px-8 md:px-10 lg:px-12 py-3 md:py-3.5 lg:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-[#FFCC33]/90 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer Border */}
      <div style={{ borderTop: '0.3px solid #FFCC33', width: '100%' }}></div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] w-full px-6 md:px-12 lg:px-20 xl:px-[100px] py-8 md:py-12 lg:py-[50px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[99.69px]">
            {/* Left Column - Logo and Social Media */}
            <div>
              <Image
                src="/western-logo.png"
                alt="Western Innovation"
                width={180}
                height={40}
                className="h-8 md:h-10 w-auto mb-4 md:mb-6"
              />
              <div className="flex items-center gap-3 md:gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/insta.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/x.png"
                    alt="X"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </a>
              </div>
            </div>

            {/* Middle Column - Our Company */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Our Company</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Help & Support */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Help & Support</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>

      {/* Copyright */}
      <div className="w-full pt-6 md:pt-8 pb-6 md:pb-8 border-t border-gray-800 px-4" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm text-center">
          <Image
            src="/vuesax/linear/copyright.png"
            alt="Copyright"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
          />
          <p>2025 Western Innovation Technology Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
