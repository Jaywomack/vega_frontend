const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 bg-custom-color-1 body-font sticky-bottom">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Stay Connected
              </h2>
              <nav className="list-none mb-10">
                <li className="my-2">
                  <div className="flex flex-wrap mx-auto items-center">
                    <span className="inline-flex w-full">
                      <a className="text-gray-400">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5 text-custom-color-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-gray-400">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5 text-custom-color-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5 text-custom-color-2"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-gray-400">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5 text-custom-color-2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                    </span>
                  </div>
                </li>
                <li className="py-2 text-white"> Subscribe</li>
                <li className="py-2">
                  Be the first to know about the latest Vega news
                </li>
                <form action="submit" className="inline-flex text-black">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="bg-white pl-3 py-2"
                  />
                  <button className="bg-custom-color-2 px-3 text-white">
                    {">"}
                  </button>
                </form>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Products
              </h2>
              <nav className="list-none mb-10">
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Platform</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">
                    Secure WorkRemote
                  </a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Atelier</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Pricing
              </h2>
              <nav className="list-none mb-10">
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Small</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Medium</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Enterpise</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">About</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Careers</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10">
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Blog</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">
                    Datasheets & Case Studies
                  </a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">News</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Reports</a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">Videos</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Get In Touch
              </h2>
              <nav className="list-none mb-10">
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">
                    Tel: (509)-821-9210
                  </a>
                </li>
                <li className="my-1">
                  <a className="text-gray-400 hover:text-white">
                    Email: info@vegacloud.io
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2020 by Vega Cloud, Inc.
            </p>
            <a className="underline" href="/">
              Terms & Conditions
            </a>
            <a className="underline" href="/">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
