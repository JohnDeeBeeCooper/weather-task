import React from "react";
import {
  Container,
  Hourly,
  Daily,
  Text,
  Temp,
  Row,
  Col,
  Day
} from "./Today.styles";
import "../../../assets/svg";

const Today = ({ weekDay, monthDay, day, year, weather, point, city }) => {
  const presently = weather[0];
  const msrmnt = point === "C" ? "℃" : "°F";
  const filtWeather = weather.slice(1, weather.length);
  return (
    <Container>
      <Col>
        <Col>
          <div>
            <Text typeText={"header"}>{city}</Text>
            <Text
              typeText={"header"}
            >{`${weekDay}, ${day} ${monthDay} ${year}`}</Text>
            <Text typeText={"header"}>{presently.desc}</Text>
          </div>
          <svg width="200" height="200">
            <use xlinkHref={`#${presently.icons.icon}`} />
          </svg>
          <Row>
            <Row>
              <svg width="80" height="80">
                <use xlinkHref={`#${presently.icons.therm}`} />
              </svg>
              <Text typeText={"header"}>
                {presently.temp > 0
                  ? `+${presently.temp}`
                  : `${presently.temp}`}
                {msrmnt}
              </Text>
            </Row>
            <Row>
              <svg width="80" height="80">
                <use xlinkHref={"#wind"} />
              </svg>
              <Text typeText={"header"}>
                {presently.wind.speed} {presently.wind.direction}
              </Text>
            </Row>
          </Row>
        </Col>
      </Col>
      <Col style={{ justifyContent: "flex-end" }}>
        <Daily>
          {filtWeather.map((item, id) => (
            <Day key={id}>
              <Hourly>
                <Col>
                  <Row>
                    <Text typeText={"temp"}>{item.time}</Text>
                    <svg width="100" height="100">
                      <use xlinkHref={`#${item.icons.icon}`} />
                    </svg>
                  </Row>
                  <Row>
                    <Row>
                      <svg width="40" height="40">
                        <use xlinkHref={`#${item.icons.therm}`} />
                      </svg>
                      <Text typeText={"temp"}>
                        {item.temp > 0 ? `+${item.temp}` : `${item.temp}`}
                        {msrmnt}
                      </Text>
                    </Row>
                  </Row>
                </Col>
              </Hourly>
            </Day>
          ))}
        </Daily>
      </Col>
    </Container>
  );
};
export default Today;
