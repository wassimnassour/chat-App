import React from "react";
import { WelcomeContainer } from "./welcome.style";
const Welcome = ({title , subTitle}) => {
  return (
    <WelcomeContainer>
      <h2>{title}</h2>
      <span>
        {subTitle}
      </span>
    </WelcomeContainer>
  );
};

export default Welcome;
