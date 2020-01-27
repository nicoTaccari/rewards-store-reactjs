import { StyledDesktopNavbar } from "../styles/styledNav";
import { Burger } from "../components/burger";
import { useState, useEffect } from "react";

export const DesktopNavbar = props => {
  // const { reduxStore } = props;
  console.log(props);
  const [credits, setCredits] = useState();
  const [value, setValue] = useState("1000");

  useEffect(() => {
    // const user = reduxStore.dispatch(getUser());
    // setCredits(user.points);
  });

  return (
    <StyledDesktopNavbar>
      <Burger />
      <div className="logo">Rewards Store</div>
      <div>
        <div></div>
        <span>Balance: {credits}</span>
        <div>
          <select onChange={event => setValue(event.target.value)}>
            <option value="1000">1000</option>
            <option value="5000">5000</option>
            <option value="7500">7500</option>
          </select>
          <button onClick={() => reduxStore.dispatch(addCredits(value))}>
            Add Credits
          </button>
        </div>
      </div>
    </StyledDesktopNavbar>
  );
};
