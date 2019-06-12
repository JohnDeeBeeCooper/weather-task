import styled from "styled-components";
import { Layout } from "antd";

const Main = styled.div`
  width: 75%;
`;
const Content = styled(Layout.Content)`
  display: table;
  table-layout: fixed;
  border-spacing: 10px;
`;

const Header = styled.div``;
const Container = styled.div`
  display: table;
  margin: 0 auto;
`;

export { Main, Container, Header, Content };
