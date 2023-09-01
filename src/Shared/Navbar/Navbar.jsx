import { useRef, useState } from "react";
import { hideInactive, pageRoutes } from "../../meta/pageData.jsx";
import { CommonLink } from "../Links.styled.js";
import {
  NavBarContainer,
  NavBarToggleBtn,
  NavbarList,
  NavbarWrapper,
} from "./Navbar.styled.js";

export const Navbar = ({ themeToggler }) => {
  const [showNav, setShowNav] = useState(true);

  const handleToggleNavbar = () => {
    setShowNav(!showNav);
  };

  const btnRef = useRef(null);
  const handleMouseLeave = () => {
    // Fixes the following bug:
    //   Click "Toggle navbar" to hide
    //   Click "Toggle navbar" again to show
    //   Now the button "Toggle navbar" still has the "active" attribute(?)
    //     This triggered the css pseudo-selector :focus-within
    //     Which was added to trigger the flex-wrap: wrap rule for keyboard navigation as well as mouse-hovering
    btnRef.current.blur();
  };

  return (
    <NavbarWrapper $showNav={showNav} onMouseLeave={handleMouseLeave}>
      <NavBarToggleBtn
        ref={btnRef}
        onClick={handleToggleNavbar}
        $showNav={showNav}
      >
        Toggle Navbar
      </NavBarToggleBtn>
      <NavBarContainer $showNav={showNav}>
        <NavbarList>
          {pageRoutes.filter(hideInactive).map(({ path, description }) => (
            <li>
              <CommonLink href={path}>{description}</CommonLink>
            </li>
          ))}
        </NavbarList>
        <button onClick={() => themeToggler()}>Toggle Dark mode</button>
      </NavBarContainer>
    </NavbarWrapper>
  );
};
