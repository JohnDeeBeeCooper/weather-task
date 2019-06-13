import styled from "styled-components";
import { Card as AntdCard } from "antd";

const StyledCard = styled(AntdCard)`
  display: flex;
  width: 150px;
  height: 150px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  :hover {
    transform: scale(1.05);
  }
`;
const Svg = styled.svg`
  margin: 0 auto;
  width: 75px;
  height: 75px;
`;

export { StyledCard, Svg };
