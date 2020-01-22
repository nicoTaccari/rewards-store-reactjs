import styled from "styled-components";
import { StyledSidenav } from "../styles/styledSidenav";
// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`;

const Container = styled.div`
  background: #ebebeb;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
`;

const Card = styled.article`
  position: relative;
  width: 27rem;
  border-radius: 2px;
  min-height: ${remy(300)};
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.25s ease-in-out;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;

  &:focus,
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.23);
  }
`;

// Card side - front
const CardFront = styled.div`
  background: #fff;
  font-weight: bold;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: ${remy(21)};
  display: flex;
  justify-content: space-around;
`;

const CardImage = styled.span`
  display: block;
`;

const Content = styled.article`
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
`;

const Footer = styled.footer`
  grid-column: 1 / -1;
  font-size: 2vh;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export { Footer, Container, Card, CardFront, CardTitle, CardImage, Content };
