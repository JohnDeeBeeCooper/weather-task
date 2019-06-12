import styled from "styled-components";
import { Card as AntdCard } from "antd";

const StyledCard = styled(AntdCard)`
  width: 200px;
  height: 150px;
  display: table-cell;
  :hover {
    transform: scale(1.05);
  }
`;

export { StyledCard };
