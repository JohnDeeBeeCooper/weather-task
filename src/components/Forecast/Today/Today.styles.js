import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 900px;
`;
const Text = styled.p`
  font-weight: 600;
  ${({ typeText }) => {
    switch (typeText) {
      case "temp":
        return css`
          font-size: 18px;
        `;
      case "header":
        return css`
          font-size: 24px;
        `;
      case "":
        return css``;
      default:
        break;
    }
  }}
`;
const Hourly = styled.div`
  display: flex;
`;
const Daily = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export { Container, Hourly, Daily, Text, Row, Col };
