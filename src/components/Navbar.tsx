import { HiOutlineCode } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="bg-neutral-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-green-500" href="#">
              <span className="sr-only">Home</span>
              <HiOutlineCode />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="rounded-md bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 text-sm font-medium text-green-500"
                    href="#"
                  >
                    A Propos
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-md bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 text-sm font-medium text-green-500"
                    href="#"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-md bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 text-sm font-medium text-green-500"
                    href="#"
                  >
                    Programmes
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-gray-200 shadow hover:text-gray-300"
                href="#"
              >
                S&apos;inscrire
              </a>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
