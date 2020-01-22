import styled from "styled-components";

export const StyledSidenav = styled.aside`
  background: lightyellow;
  height: 100%;
  transition: all 0.5s ease-in-out;
  &.is-closed {
    margin-left: -50px;
    opacity: 0;
  }
`;
