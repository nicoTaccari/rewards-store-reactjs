import styled from "styled-components";
import { Select, MenuItem, Button } from "@material-ui/core";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCredits } from "../../ducks/reducers/userReducer";

const UserStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: large;
  justify-content: space-around;
`;

const UserData = styled.span`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const UserCredits = styled.div`
  padding: 0.5em;
  display: flex;
  flex-flow: column nowrap;
`;

export const UserInfo = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [credits, setCredits] = useState("");

  const handleChange = event => {
    setCredits(event.target.value);
  };
  return (
    <>
      <UserStyle>
        <UserData>
          {user.username} {user.points}
        </UserData>
        <UserCredits>
          <Select
            labelId="agregar-creditos"
            id="demo-simple-select-helper"
            value={credits}
            onChange={handleChange}
          >
            <MenuItem value={1000}>1000</MenuItem>
            <MenuItem value={5000}>5000</MenuItem>
            <MenuItem value={7500}>7500</MenuItem>
          </Select>
        </UserCredits>
        <Button onClick={() => dispatch(addCredits(credits))}>
          Agregar Creditos
        </Button>
      </UserStyle>
    </>
  );
};
