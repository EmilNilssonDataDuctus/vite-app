import { useRef, useState } from "react";
import { CommonLink } from "../Links.styled.js";
import {
  ListItem,
  NavBarContainer,
  NavBarToggleBtn,
  NavbarList,
  NavbarWrapper,
} from "./Navbar.styled.js";

function Navbar({ themeToggler }) {
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
          <ListItem>
            <CommonLink href="/">Home</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/cards">Cards</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/memory-game">Memory Game</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/hover-cards">Hover cards showcase</CommonLink>{" "}
          </ListItem>
          <ListItem>
            <CommonLink href="/game">Game</CommonLink>{" "}
          </ListItem>
          <ListItem>
            <CommonLink href="/kc-summerleague">KC Summerleague</CommonLink>{" "}
          </ListItem>
          <ListItem>
            <CommonLink href="/generate">Generator</CommonLink>{" "}
          </ListItem>
          <ListItem>
            <CommonLink href="/tracing">Tracing</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/hover-move">Hover effects</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/hover-move2">Hover effects 2</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/chart">Chart</CommonLink>
          </ListItem>
          <ListItem>
            <CommonLink href="/todo-list">Todo list</CommonLink>
          </ListItem>
        </NavbarList>
        <button onClick={() => themeToggler()}>Toggle Dark mode</button>
      </NavBarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
