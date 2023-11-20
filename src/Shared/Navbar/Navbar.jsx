import { useRef, useState } from "react";
import {
  hideDynamicRoutes,
  hideInactivePages,
  pageRoutes
} from "../../Pages/pageData.jsx";
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

  const btnToggleNavbarRef = useRef(null);
  const btnToggleDarkModeRef = useRef(null);
  const handleMouseLeave = () => {
    // Fixes the following bug:
    //   Click "Toggle navbar" to hide
    //   Click "Toggle navbar" again to show
    //   Now the button "Toggle navbar" still has the "active" attribute(?)
    //     This triggered the css pseudo-selector :focus-within
    //     Which was added to trigger the flex-wrap: wrap rule for keyboard navigation as well as mouse-hovering
    btnToggleNavbarRef.current.blur();

    // Same bugfix for Toggle Dark mode btn
    btnToggleDarkModeRef.current.blur();
  };

  return (
    <NavbarWrapper $showNav={showNav} onMouseLeave={handleMouseLeave}>
      <NavBarToggleBtn
        ref={btnToggleNavbarRef}
        onClick={handleToggleNavbar}
        $showNav={showNav}
      >
        Toggle Navbar
      </NavBarToggleBtn>
      <NavBarContainer $showNav={showNav}>
        <NavbarList>
          {/* Uncomment below to push featured projects to the start of the list */}
          {/* Featured projects:
          {pageRoutes
            .filter(hideInactivePages)
            .filter(hideDynamicRoutes)
            .filter(hideNonFeaturedPages)
            .map(({ path, description, featured }) => (
              <li key={path}>
                <CommonLink href={path} $featured={featured}>
                  {description}
                </CommonLink>
              </li>
            ))} */}
          {pageRoutes
            .filter(hideInactivePages)
            .filter(hideDynamicRoutes)
            // .filter(hideFeaturedPages)
            .map(({ path, description, featured }) => (
              <li key={path}>
                <CommonLink href={path} $featured={featured}>
                  {description}
                </CommonLink>
              </li>
            ))}
        </NavbarList>
        <button ref={btnToggleDarkModeRef} onClick={() => themeToggler()}>
          Toggle Dark mode
        </button>
      </NavBarContainer>
    </NavbarWrapper>
  );
};
