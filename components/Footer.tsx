import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
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
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    Home
                  </Link>
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
      <div className="w-full pt-6 md:pt-8 pb-6 md:pb-8 border-t border-gray-800 px-4">
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
    </>
  );
}
