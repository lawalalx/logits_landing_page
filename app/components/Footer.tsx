import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] py-20 px-6 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#home" className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
              Syncliq Lab
            </Link>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
              We design, build, and deploy intelligent AI systems that automate workflows, enhance decision-making, and scale business operations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-11 h-11 rounded-full bg-gray-300 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-11 h-11 rounded-full bg-gray-300 hover:bg-purple-400 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-11 h-11 rounded-full bg-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.559c-.726.275-1.34.639-1.955 1.254-.616.615-.979 1.23-1.254 1.955C.802 4.275.62 5.084.567 6.29.514 7.496.5 7.896.5 11.517c0 3.621.014 4.021.067 5.227.053 1.206.235 2.015.488 2.708.275.726.639 1.34 1.254 1.955.615.616 1.23.979 1.955 1.254.693.257 1.502.439 2.708.488 1.206.053 1.606.067 5.227.067 3.621 0 4.021-.014 5.227-.067 1.206-.049 2.015-.231 2.708-.488.726-.275 1.34-.638 1.955-1.254.616-.615.979-1.23 1.254-1.955.257-.693.439-1.502.488-2.708.053-1.206.067-1.606.067-5.227 0-3.621-.014-4.021-.067-5.227-.049-1.206-.231-2.015-.488-2.708-.275-.726-.638-1.34-1.254-1.955-.615-.616-1.23-.979-1.955-1.254C15.725.302 14.916.12 13.71.067 12.504.014 12.104 0 8.483 0zM8.483 2.25c3.504 0 3.914.014 5.293.08.971.049 1.497.208 1.834.344.435.178.746.391 1.073.718.327.327.54.638.718 1.073.136.337.295.863.344 1.834.066 1.379.08 1.789.08 5.293 0 3.504-.014 3.914-.08 5.293-.049.971-.208 1.497-.344 1.834-.178.435-.391.746-.718 1.073-.327.327-.638.54-1.073.718-.337.136-.863.295-1.834.344-1.379.066-1.789.08-5.293.08-3.504 0-3.914-.014-5.293-.08-.971-.049-1.497-.208-1.834-.344-.435-.178-.746-.391-1.073-.718-.327-.327-.54-.638-.718-1.073-.136-.337-.295-.863-.344-1.834-.066-1.379-.08-1.789-.08-5.293 0-3.504.014-3.914.08-5.293.049-.971.208-1.497.344-1.834.178-.435.391-.746.718-1.073.327-.327.638-.54 1.073-.718.337-.136.863-.295 1.834-.344 1.379-.066 1.789-.08 5.293-.08z"/>
                  <path d="M12.017 5.838a6.182 6.182 0 100 12.364 6.182 6.182 0 000-12.364zM12.017 15a3 3 0 110-6 3 3 0 010 6z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-11 h-11 rounded-full bg-gray-300 hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Connect with us on LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-gray-600 hover:text-purple-600 transition-colors text-sm md:text-base">
                Home
              </Link>
              <Link href="#service" className="text-gray-600 hover:text-purple-600 transition-colors text-sm md:text-base">
                Service
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors text-sm md:text-base">
                Features
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacypolicy" className="text-gray-600 hover:text-purple-600 transition-colors text-sm md:text-base">
                Privacy Policy
              </Link>
              <Link href="/termsofuse" className="text-gray-600 hover:text-purple-600 transition-colors text-sm md:text-base">
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        {/* Extra Links - Mobile Only */}
        <div className="md:hidden mt-8 pt-8 border-t border-gray-200">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Extra Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/home" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Career
              </Link>
              <Link href="/form" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Desktop Extra Links */}
        <div className="hidden md:flex justify-center mt-12 pt-8 border-t border-gray-200">
          <nav className="flex gap-8">
            <Link href="/home" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
              Career
            </Link>
            <Link href="/form" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Designed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 hover:text-purple-600 transition-colors"
            >
              Syncliq Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
