import React from "react";
import { StyledCard } from "./Card.styles";
import "../../../assets/svg";

const Card = props => {
  console.log(props);
  return (
    <StyledCard>
      <svg width="80" heigth="80">
        <use xlinkHref={"#cloudy"} />
      </svg>
      <p>{props.temp}</p>
    </StyledCard>
  );
};

export default Card;
