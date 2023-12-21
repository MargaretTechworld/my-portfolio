import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
   <nav className= {` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
   <div className="w-full flex justify-between items-cnter max-w-7xl mx-auto">
<Link to="/" className="flex items-center gap-2" onClick= {() => 
  {setActive(""); 
  window.scrollTo(0, 0);
  
  }}>
    <img src={logo} alt="logo" className="w-2 h-2 object-contain" />
    <p className="text-white text-white text-[18px] font-bold cursor-pointer"> Margaret Kojo-Musa <span className="sm:block hidden"> | Software Development</span></p>
</Link>
   </div>
   </nav>
  )
}

export default Navbar