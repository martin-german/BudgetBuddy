import LanguageSwitcher from "../switchers/LanguageSwitcher";
import ThemeSwitcher from "../switchers/ThemeSwitcher";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between w-full px-4">
      {/* Left section: Icon and Brand */}
      <div className="flex justify-center">
        <LanguageSwitcher />
      </div>
      {/* Right section: Theme Switcher */}
      <div className="flex justify-end">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

export default Navbar;
