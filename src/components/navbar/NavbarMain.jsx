import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { HiDocumentDownload } from "react-icons/hi";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed top-0 left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Anand_Ediga_Resume.pdf"
            download="Anand_Ediga_Resume.pdf"
            className="sm:hidden md:flex items-center gap-1 px-4 py-2 rounded-full text-xl font-bold font-body text-orange border-orange border transition-all duration-500 hover:scale-110 hover:bg-orange hover:text-black cursor-pointer"
          >
            Resume
            <HiDocumentDownload />
          </a>
          <NavbarBtn />
        </div>
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;

