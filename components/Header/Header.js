import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

import humanaslogo from "../../public/images/logo/gradientlogo.png";
import ToolsData from "../../data/header.json";

import Nav from "./Nav";
import GridMenu from "./GridMenu";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="logo-light"
                    src={humanaslogo}
                    width={201}
                    height={35}
                    alt="Humanas Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-6 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>

                <div className="header-btn">
                  <Link
                    className={`btn-default ${btnClass}`}
                    href="https://app.humanas.io/"
                    target="_blank"
                  >
                    Begin
                  </Link>
                </div>

                {/* <GridMenu ToolsData={ToolsData} /> */}

                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
