import logo from "../assets/logo.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/Vactor21.png";
import instagram from "../assets/Vactor25.png";
import youtube from "../assets/Vactor23.png";
import twiter from "../assets/Vactor22.png";
import linkedin from "../assets/Vactor24.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="2xl:max-w-8xl lg:max-w-7xl mx-auto t-6 px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Top Section - Logo and Social Media */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 py-6 lg:py-8 border-b-2 border-gray-700">
          <div className="lg:col-span-3">
            <div className="w-[70px] h-[60px] sm:w-[80px] sm:h-[70px] lg:w-[89px] lg:h-[77px] overflow-hidden">
              <img
                src={logo}
                alt="Hanami Japan"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] lg:text-sm leading-5 sm:leading-6">
              Your trusted partner for importing premium Japanese vehicles.
              Experience the finest in automotive excellence.
            </p>
          </div>

          <div className="lg:col-span-9 flex justify-start lg:justify-end space-x-3 sm:space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <img src={facebook} alt="Facebook" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <img src={twiter} alt="Twitter" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <img src={youtube} alt="YouTube" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]" />
            </a>
            <a href="#" aria-label="linkedin" className="hover:opacity-80">
              <img src={linkedin} alt="linkedin" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src={instagram} alt="Instagram" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Menu, Hours, Contact */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-2 py-6 lg:py-8">
          {/* Quick Menu */}
          <div className="lg:col-span-6">
            <h3 className="text-gray-100 font-semibold mb-3 sm:mb-4 text-[14px] sm:text-[15px] lg:text-base">Quick Menu</h3>
            <ul className="text-[11px] sm:text-[12px] lg:text-sm list-disc list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              <div className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies Setting
                  </a>
                </li>
              </div>

              <div className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Car Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Cars
                  </a>
                </li>
              </div>

              <div className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    How to Buy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </div>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-100 font-semibold mb-3 sm:mb-4 text-[14px] sm:text-[15px] lg:text-base">Office Hours</h3>
            <ul className="space-y-2 sm:space-y-3 text-[11px] sm:text-[12px] lg:text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <div>
              <h3 className="text-gray-100 font-semibold mb-3 sm:mb-4 text-[14px] sm:text-[15px] lg:text-base">Address</h3>
              <p className="text-[11px] sm:text-[12px] lg:text-sm">2-6-12 Shibuya, Shibuya-ku Tokyo</p>
            </div>

            <div className="mt-3 sm:mt-4 flex items-center space-x-2 sm:space-x-3 text-[11px] sm:text-[12px] lg:text-sm">
              <img src={whatsapp} alt="WhatsApp" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]" />
              <span className="font-[400] text-[14px] sm:text-[16px] lg:text-[20px] leading-[14px] sm:leading-[18px] lg:leading-[20px]">123-345-768</span>
            </div>
            
            <div className="mt-2 text-[11px] sm:text-[12px] lg:text-sm">
              Email:{" "}
              <a
                href="mailto:service@hanamijapan.com"
                className="hover:text-white break-all"
              >
                service@hanamijapan.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#030712]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 text-center text-[10px] sm:text-[11px] lg:text-sm text-gray-400">
          © 2025 Hanami Japan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
