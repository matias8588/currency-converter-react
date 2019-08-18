import React, { Component } from "react";
import axios from "axios";

export default class Converter extends Component {
  state = {
    arsToUsd: 0,
    arsToEur: 0,
  };
  componentDidMount() {
    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=USD_ARS,EUR_ARS&compact=ultra&apiKey=fcba8c3eabd5419de1c7`,
      )
      .then(res => {
        this.setState({
          arsToUsd: res.data.USD_ARS,
          arsToEur: res.data.EUR_ARS,
        });
      });
  }

  //   request_2() {
  //     return axios.get(
  //       "https://free.currconv.com/api/v7/convert?apiKey=fcba8c3eabd5419de1c7&q=USD_ARS,EUR_ARS&compact=ultra&date=2019-08-05&endDate=2019-08-13",
  //     );

  render() {
    return <div>{this.state.arsToEur}</div>;
  }
}
