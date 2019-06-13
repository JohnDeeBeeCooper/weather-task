import React, { Component } from "react";
import API from "../../api/";
import { connect } from "react-redux";
import Card from "./Card/Card";
import { Main, Container, Content } from "./Forecast.styles";
import { Spin } from "antd";
import sortData from "../../utils/sortData";

class Forecast extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const { getData, getCity } = this.props;
      const { latitude, longitude } = pos.coords;
      API.post(
        `forecast?lat=${latitude}&lon=${longitude}&APPID=b34f35e19026981edb6a852df2630cad`
      )
        .then(res => {
          console.log(res.data);
          getCity(res.data.city.name);
          const sortingData = sortData(res.data.list);
          getData(sortingData);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  renderForecast() {
    return (
      <Container>
        <div>
          <p>{this.props.city}</p>
        </div>
        <Content>
          {/* {newData.map((item, id) => (
            <Card key={id} temp={item.main.temp} date={item.dt} />
          ))} */}
        </Content>
      </Container>
    );
  }
  render() {
    return (
      <Main>
        {Object.entries(this.props.forecast).length === 0 ? (
          <Spin />
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
  id
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
