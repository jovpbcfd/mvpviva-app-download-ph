import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={`bg-[#161930] transition-all duration-300 ease-in-out md:border-b-3 border-[#ffeb9e]`}
    >
      <div className={`bg-[#161930] transition-shadow duration-300 shadow-lg`}>
        <div className="w-full max-w-[1230px] mx-auto text-white">
          <div className="flex flex-row justify-between items-center px-2 py-4 md:flex-row md:py-4 md:px-[22px]">
            <div>
              <Link href="/">
                <Image
                  src="/img/MVPVIVA-LOGO.png"
                  alt="PANALOBET"
                  width={200}
                  height={40}
                  className="w-[150px] md:w-[200px]"
                />
              </Link>
            </div>
            <div className="ml-auto md:w-auto md:mt-0 md:ml-auto md:flex gap-4">
              {/* <Link
                href="#"
                className="bg-transparent px-4 py-2 rounded-full text-center
                            transition-transform transform hover:scale-105
                            border border-white
                            md:w-[150px]
                            flex items-center justify-center
                            "
              >
                SIGNUP
              </Link> */}
              <Link
                href="https://panalobet200.com/ph/tl"
                className="md:bg-[linear-gradient(135deg,#3e4b7c_0%,#283151_100%)] md:px-4 md:py-2 md:rounded-md md:shadow-md text-center
                            md:transition-transform md:transform md:hover:scale-105 duration-300 w-full
                            md:w-[150px]
                            flex items-end md:items-center justify-center
                            "
              >
                <Image
                  src="/img/BANGLADESH.webp"
                  width={20}
                  height={20}
                  className="w-[30px] rounded-xs  md:w-[20px]"
                  alt="ph flag"
                />
                <span className="ml-2 hidden md:block">Bengali</span>
              </Link>
            </div>
            {/* <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
