import { styled } from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: rgb(59, 59, 59);
  box-shadow: 0 0 10px black;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;

  display: flex;
  flex-direction: column;

  height: ${({ $showNav }) => ($showNav ? "auto" : "0")};

  &:hover,
  &:focus-within {
    ul {
      flex-wrap: wrap;
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  transition: transform 200ms 100ms;

  transform: ${({ $showNav }) =>
    $showNav ? "translateY(0)" : "translateY(-100%)"};
`;

export const NavBarToggleBtn = styled.button`
  position: relative;
  z-index: 2;

  display: block;
  padding: ${({ $showNav }) => ($showNav ? "0" : "16px")};

  transition: padding 200ms;
`;

export const NavbarList = styled.ul`
  list-style: none;

  display: flex;
  gap: 32px;

  margin: 0;
  padding: 32px 16px;
`;

export const ListItem = styled.li`
  display: inline-block;
`;
