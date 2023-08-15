import { styled } from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: rgb(59, 59, 59);
  box-shadow: 0 0 10px black;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;

  display: flex;
  justify-content: space-between;

  &:hover {
    ul {
      flex-wrap: wrap;
    }
  }
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
