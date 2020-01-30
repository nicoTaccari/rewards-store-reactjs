import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import theme from "styled-theming";

const UserStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: large;
  justify-content: space-around;
`;

export const UserInfo = props => {
  const { user } = props;
  return (
    <>
      <UserStyle>
        <Button>Agregar Puntos</Button>
        <Typography>{user.name}</Typography>
        <Typography>{user.points}</Typography>
      </UserStyle>
    </>
  );
};
