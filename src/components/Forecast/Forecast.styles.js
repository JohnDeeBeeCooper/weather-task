import styled from "styled-components";
import { Layout } from "antd";

const Main = styled.div`
  display: flex;
`;
const Content = styled(Layout.Content)`
  flex-direction: row; !important
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Container = styled.div`
  margin: 0 auto;
  vertical-align: middle;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { Main, Container, Header, Content };
