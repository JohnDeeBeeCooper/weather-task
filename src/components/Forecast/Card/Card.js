import React from "react";
import { Card as AntdCard } from "antd";
import styled from "styled-components";

const Card = props => {
  return (
    <StyledCard>
      <p>test</p>
    </StyledCard>
  );
};

const StyledCard = styled(AntdCard)`
  :hover {
    transform: scale(1.05);
  }
`;
export default Card;
