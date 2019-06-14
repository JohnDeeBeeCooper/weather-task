import React, { Component } from "react";
import API from "../../api/";
import { connect } from "react-redux";
import Card from "./Card/Card";
import { Main, Container, Content, Row } from "./Forecast.styles";
import { Spin, Card as AntdCard } from "antd";
import sortData from "../../utils/sortData";
import Today from "./Today/Today";
import dailyWeather from "../../utils/dailyWeather";

class Forecast extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const { getData, getCity } = this.props;
      const { latitude, longitude } = pos.coords;
      API.post(
        `forecast?lat=${latitude}&lon=${longitude}&APPID=b34f35e19026981edb6a852df2630cad`
      )
        .then(res => {
          getCity(res.data.city.name);
          const sortingData = sortData(res.data.list);
          getData(sortingData);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  handleClick = id => {
    this.props.changeId(id);
  };
  renderForecast() {
    const { forecast, id, point } = this.props;
    const obj = { ...forecast[id], point };
    const newData = forecast.map((item, idx) => {
      if (idx === id) {
        return null;
      }
      const newItem = {
        ...item,
        weather: dailyWeather(item.weather),
        func: this.handleClick,
        point
      };
      return newItem;
    });
    return (
      <Container>
        <div>
          <p>{this.props.city}</p>
        </div>
        <Content>
          <AntdCard>
            <Today {...obj} />
          </AntdCard>
          <Row>{newData.map(item => (item ? <Card {...item} /> : null))}</Row>
        </Content>
      </Container>
    );
  }
  render() {
    return (
      <Main>
        {Object.entries(this.props.forecast).length === 0 ? (
          <Spin size="large" />
        ) : (
          this.renderForecast()
        )}
      </Main>
    );
  }
}

const mapState = ({ data }) => ({
  forecast: data.forecast,
  city: data.city,
  id: data.id,
  point: data.point
});
const mapDispatch = ({ data: { getData, getCity, changeId } }) => ({
  getData: data => getData(data),
  getCity: city => getCity(city),
  changeId: id => changeId(id)
});

export default connect(
  mapState,
  mapDispatch
)(Forecast);
