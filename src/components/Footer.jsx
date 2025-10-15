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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-12 gap-8 py-8 border-b-2 border-gray-700 ">
          <div className="col-span-3">
            <div className=" w-[89px] h-[77px] overflow-hidden">
              <img
                src={logo}
                alt="Hanami Japan"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-6">
              Your trusted partner for importing premium Japanese vehicles.
              Experience the finest in automotive excellence.
            </p>
          </div>

          <div className="col-span-9 flex justify-end space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <img src={facebook} alt="Facebook" className="w-[32px] h-[32px]" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <img src={twiter} alt="Twitter" className="w-[32px] h-[32px]" />
            </a>
            
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <img src={youtube} alt="YouTube" className="w-[32px] h-[32px]" />
            </a>

            <a href="#" aria-label="linkedin" className="hover:opacity-80">
              <img src={linkedin} alt="linkedin" className="w-[32px] h-[32px]" />
            </a>

            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src={instagram} alt="Instagram" className="w-[32px] h-[32px]" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-between  gap-2 py-8">

          <div className="col-span-6 ">
            <h3 className="text-gray-100 font-semibold mb-4">Quick Menu</h3>
            <ul className=" text-sm list-disc list-inside grid grid-cols-3 justify-between items-center">

              <div className="space-y-1 ">
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

              <div className="space-y-1  ">
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

          <div className="col-span-3 ">
            <h3 className="text-gray-100 font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-3 text-sm">
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

          <div className="col-span-3  items-end  flex flex-col">

            <div>
                <div>
                <h3 className="text-gray-100 font-semibold mb-4">Address</h3>
                <p className="text-sm">2-6-12 Shibuya, Shibuya-ku Tokyo</p>
                </div>

                <div className="mt-4 flex space-x-3 text-sm">
                    
                <img src={whatsapp} alt="WhatsApp" className="w-[28px] h-[28px]" />
                <span className="font-[400] text-[20px] leading-[20px]">123-345-768</span>
                
                </div>
                
                <div className="mt-2 text-sm">
                Email:{" "}
                <a
                    href="mailto:service@hanamijapan.com"
                    className="hover:text-white"
                >
                    service@hanamijapan.com
                </a>
                </div>
            </div>


            
          </div>

        </div>
      </div>

      <div className=" bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-400">
          © 2025 Hanami Japan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
