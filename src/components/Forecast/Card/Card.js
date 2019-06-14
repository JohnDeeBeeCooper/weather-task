import React from "react";
import { StyledCard, Svg } from "./Card.styles";
import "../../../assets/svg";
import changeMeasure from "../../../utils/changeMeasure";

const Card = props => {
  const date = new Date(props.date * 1000);
  const hours = date.getHours(props.date);
  const minutes = date.getMinutes(props.date);
  return (
    <StyledCard>
      <p>{hours + ":" + minutes}</p>
      <Svg width="75px" heigth="75px">
        <use xlinkHref={"#cloudy"} />
      </Svg>
      <p>{temp + "℃"}</p>
    </StyledCard>
  );
};

export default Card;
