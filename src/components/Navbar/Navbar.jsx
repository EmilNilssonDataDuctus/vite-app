import { CommonLink } from "../../Shared/Links.styled.js";
import { ListItem, NavbarList, NavbarWrapper } from "./Navbar.styled.js";

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarList>
        <ListItem>
          <CommonLink href="/">Home</CommonLink>
        </ListItem>
        <ListItem>
          <CommonLink href="/cards">Cards</CommonLink>
        </ListItem>
      </NavbarList>
    </NavbarWrapper>
  );
}

export default Navbar;
