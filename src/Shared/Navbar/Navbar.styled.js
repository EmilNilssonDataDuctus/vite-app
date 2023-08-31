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

  &:hover {
    ul {
      flex-wrap: ${({ $showNav }) => ($showNav ? "wrap" : "nowrap")};
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  transition: transform 200ms;

  transform: ${({ $showNav }) =>
    $showNav ? "translateY(0)" : "translateY(-100%)"};
`;

export const NavBarToggleBtn = styled.button`
  position: relative;
  z-index: 2;

  display: block;
  padding: ${({ $showNav }) => ($showNav ? "0" : "16px")};
`;

export const NavbarList = styled.ul`
  list-style: none;

  display: flex;
  gap: 32px;

  margin: 0;
  padding: 32px 16px;

  transition: flex-wrap 200ms;
`;

export const ListItem = styled.li`
  display: inline-block;
`;
