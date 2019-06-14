import styled, { css } from "styled-components";
import { Card as AntdCard } from "antd";

const StyledCard = styled(AntdCard)`
  display: flex;
  width: 240px;
  min-width: 150px;
  max-width: 240px;
  height: 200px;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Svg = styled.svg`
  width: 100px;
  height: 100px;
  ${({ therm }) =>
    therm &&
    css`
      width: 50px;
      height: 50px;
    `}
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  ${({ point }) =>
    point &&
    css`
      font-size: 12px;
    `}
`;
export { StyledCard, Row, Col, Svg, Text };
