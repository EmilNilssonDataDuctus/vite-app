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
          <CommonLink href="/memory-game">Memory Game</CommonLink>{" "}
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
      </NavbarList>
      <button onClick={() => themeToggler()}>Toggle Dark mode</button>
    </NavbarWrapper>
  );
}

export default Navbar;
