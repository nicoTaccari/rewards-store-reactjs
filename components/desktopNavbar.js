import { StyledDesktopNavbar } from "../styles/styledNav";
import { Burger } from "../components/burger";
import { useState, useEffect } from "react";

export const DesktopNavbar = () => {
  const [credits, setCredits] = useState(1000);

  useEffect(() => {});

  return (
    <StyledDesktopNavbar>
      <Burger />
      <div className="logo">Rewards Store</div>
      <div>
        <div></div>
        <span>Balance: {credits}</span>
        <div>
          <select>
            <option>1000</option>
            <option>5000</option>
            <option>7500</option>
          </select>
          <button>Add Credits</button>
        </div>
      </div>
    </StyledDesktopNavbar>
  );
};
