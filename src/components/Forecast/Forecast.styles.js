import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Main, Container, Content, Row };
