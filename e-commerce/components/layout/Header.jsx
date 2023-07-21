import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../ui/Search";
function Header() {
  const [burgerButton, setBurgerButton] = useState(true);
  const [searchButton,setSearchButton] = useState(true)

  const handleClick = () => {
    setTimeout(()=>{
        setBurgerButton(prev=>!prev)
        
    },200)
  }
  return (
    <header className="z-40 h-[80px]   bg-transparent text-black font-bold bg-white  p-10 relative">
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
                <Link onClick={handleClick} href="/">HOME</Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/shop">SHOP</Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/blog">BLOG</Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/product">OUR PRODUCT</Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/rewievs">CLIENTS</Link>
              </li>
              <li>
                <Link onClick={handleClick} href="/contact">CONTACT US</Link>
              </li>
            </ul>
            <div className="flex gap-x-5 gap-y-6 lg:gap-y-0 flex-col lg:flex-row">
              <Link onClick={handleClick} href="/auth/login">
                <button>
                  <PersonIcon />
                </button>
              </Link>
              
                <button onClick={()=>setSearchButton(prev => !prev)}>
                  {searchButton ? <SearchOffIcon/>  :  <SearchIcon/>}
                </button>
              
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
     { searchButton===true ? <Search/> : ""}
    </header>
  );
}

export default Header;
