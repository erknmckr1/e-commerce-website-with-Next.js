import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [burgerButton, setBurgerButton] = useState(true);

  const handleClick = () => {
    setTimeout(()=>{
        setBurgerButton(prev=>!prev)
    },200)
  }
  return (
    <header className="z-50 h-[80px]   bg-transparent text-black font-bold bg-white  p-10 relative">
      <div className="w-full h-full container mx-auto flex items-center justify-between">
        <div className="text-[25px] w-1/3">LOGO</div>
        <nav
          className={`w-2/3 ${
            burgerButton === true ? "hidden lg:flex" : "flex" 
          } flex justify-between text-[18px] absolute z-50 lg:static top-[70px] left-0 p-16 lg:p-0 
          transition-all duration-1000 w-full bg-white   " `}
        >
            <ul className="flex gap-x-8 gap-y-6 lg:gap-y-0 flex-col lg:flex-row  ">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <button>SHOP</button>
              </li>
              <li>
                <button>BLOG</button>
              </li>
              <li>
                <button>OUR PRODUCT</button>
              </li>
              <li>
                <button>CLIENTS</button>
              </li>
              <li>
                <button>CONTACT US</button>
              </li>
            </ul>
            <div className="flex gap-x-5 gap-y-6 lg:gap-y-0 flex-col lg:flex-row">
              <Link href="#">
                <button>
                  <PersonIcon />
                </button>
              </Link>
              <Link href="#">
                <button>
                  <SearchIcon />
                </button>
              </Link>
              <Link href="#">
                <button>
                  <ShoppingBasketIcon />
                </button>
              </Link>
            </div>
      
        </nav>
        <button
          className="inline-block lg:hidden"
          onClick={handleClick}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
