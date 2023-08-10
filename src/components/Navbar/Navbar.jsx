import { CommonLink } from "../../Shared/Links.styled.js";
import { ListItem, NavbarList, NavbarWrapper } from "./Navbar.styled.js";

function Navbar({ themeToggler }) {
  return (
    <NavbarWrapper>
      <NavbarList>
        <ListItem>
          <CommonLink href="/">Home</CommonLink>
        </ListItem>
        <ListItem>
          <CommonLink href="/cards">Cards</CommonLink>
        </ListItem>
        <ListItem>
          <CommonLink href="/generate">Generator</CommonLink>
        </ListItem>
        <ListItem>
          <CommonLink href="/tracing">Tracing</CommonLink>
        </ListItem>
      </NavbarList>
      <button onClick={() => themeToggler()}>Toggle Dark mode</button>
    </NavbarWrapper>
  );
}

export default Navbar;
