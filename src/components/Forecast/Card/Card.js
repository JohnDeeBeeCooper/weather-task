import React from "react";
import { StyledCard, Row, Col, Svg, Text } from "./Card.styles";
import "../../../assets/svg";

const Card = ({
  id,
  func,
  day,
  monthDay,
  weekDay,
  weather: { minTemp, maxTemp, icons },
  point
}) => {
  const msrmnt = point === "C" ? "℃" : "°F";
  const newMinTemp = minTemp > 0 ? `+${minTemp}` : minTemp;
  const newMaxTemp = maxTemp > 0 ? `+${maxTemp}` : maxTemp;
  return (
    <StyledCard onClick={() => func(id)}>
      <Text>{`${weekDay}, ${day} ${monthDay}`}</Text>
      <Svg width="100px" heigth="100px">
        <use xlinkHref={`#${icons.icon}`} />
      </Svg>
      <Row>
        <Svg therm width="50px" heigth="50px">
          <use xlinkHref={`#${icons.therm}`} />
        </Svg>
        <Col>
          <Text point>{`${newMinTemp}${msrmnt}`}</Text>
          <Text point>{`${newMaxTemp}${msrmnt}`}</Text>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default Card;
