
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "../../hooks/useTheme";

import { IoPartlySunnySharp } from "react-icons/io5";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
   
  

    <label className="relative inline-flex items-center cursor-pointer">
      {/* Hidden checkbox to track theme */}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      {/* Toggle Switch Background */}
      <div className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full peer-checked:from-blue-500 peer-checked:to-gray-600 transition-colors duration-500 shadow-inner">
        {/* Toggle Knob with Icon */}
        <div className="absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-500 peer-checked:translate-x-8">
          {theme === "dark" ? (
            <BiSolidMoon className="text-blue-800 text-lg" />
          ) : (
            <IoPartlySunnySharp className="text-orange-500 text-lg" />
          )}
        </div>
      </div>
    </label>
  );

}
export default ThemeToggle;
