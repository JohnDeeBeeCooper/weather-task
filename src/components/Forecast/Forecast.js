import React, { Component } from "react";
import API from "../../api/";
import { connect } from "react-redux";
import Card from "./Card/Card";
import { Main, Container, Content } from "./Forecast.styles";
import { Layout, Spin } from "antd";

class Forecast extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const { getData } = this.props;
      const { latitude, longitude } = pos.coords;
      API.post(
        `forecast?lat=${latitude}&lon=${longitude}&APPID=b34f35e19026981edb6a852df2630cad`
      )
        .then(res => {
          console.log(res.data);
          getData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  renderForecast() {
    const { Header, Footer } = Layout;
    return (
      <Main>
        <Container>
          <Header>
            <p>{this.props.forecast.city.name}</p>test
          </Header>
          <Content>
            {this.props.forecast.list.map(item => <Card />) || "test"}
          </Content>
          <Footer>
            <p>Footer</p>
          </Footer>
        </Container>
      </Main>
    );
  }
  render() {
    return Object.entries(this.props.forecast).length === 0 ? (
      <Spin />
    ) : (
      this.renderForecast()
    );
  }
}

const mapState = ({ data }) => ({
  forecast: data.forecast
});
const mapDispatch = ({ data: { getData } }) => ({
  getData: data => getData(data)
});

export default connect(
  mapState,
  mapDispatch
)(Forecast);