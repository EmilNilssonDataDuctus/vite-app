import { styled } from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: rgba(59, 59, 59, 0.5);
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

  transition: transform 300ms 100ms;

  transform: ${({ $showNav }) =>
    $showNav ? "translateY(0)" : "translateY(-200%)"};
`;

export const NavBarToggleBtn = styled.button`
  background-color: rgba(59, 59, 59, 0.5);
  position: relative;
  z-index: 2;

  display: block;
  padding: ${({ $showNav }) => ($showNav ? "0" : "16px")};

  transition:
    padding 200ms,
    background-color 700ms;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: rgb(59, 59, 59);
  }
`;

export const NavbarList = styled.ul`
  list-style: none;

  display: flex;
  gap: 32px 8px;

  margin: 0;
  padding: 32px 16px;
`;
