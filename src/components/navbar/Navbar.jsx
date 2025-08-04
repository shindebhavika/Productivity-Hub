import  {  useState } from "react";

import { AlignLeft, AlignRight, } from "lucide-react";
import Logo from "../common/Logo";

import ThemeToggle from "../ui/ThemeToggle";
import {  useNavigate} from "react-router-dom";





const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);



 



  return (
    <header className="bg-[#0017324D] backdrop-blur-3xl font-poppins shadow-md fixed top-0 w-full z-50">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Logo />


   

        {/* Right Side - Theme, Auth, Mobile */}
        <div className="flex items-center gap-4">
         

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
        
       
        </div>
      </div>

      
    </header>
  );
};

export default Navbar;
