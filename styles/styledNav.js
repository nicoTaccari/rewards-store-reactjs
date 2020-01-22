import styled from "styled-components";

export const StyledDesktopNavbar = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 15vh;
  grid-column: 1;
  width: 100%;
  align-items: center;
  background: ${props => props.theme.primary};
  color: black;

  .logo {
    font-size: 5vh;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;
