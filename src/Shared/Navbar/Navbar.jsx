import { CommonLink } from "../Links.styled.js";
import {
  ListItem,
  NavBarContainer,
  NavbarList,
  NavbarWrapper,
} from "./Navbar.styled.js";

function Navbar({ themeToggler }) {
  return (
    <NavbarWrapper>
      <button>Hide Navbar</button>
      <NavBarContainer>
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
