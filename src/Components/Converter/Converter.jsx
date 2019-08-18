import React, { Component } from "react";
import { Card, InputGroup, FormControl, Table } from "react-bootstrap";
import Dollar from "../../assets/dollar.png";
import Euro from "../../assets/euro.png";
import BitCoin from "../../assets/bitcoin.png";
import axios from "axios";

export default class Converter extends Component {
  state = {
    arsToUsd: 0,
    arsToEur: 0,
    usdConvert: 0,
  };
  componentDidMount() {
    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=USD_ARS,EUR_ARS&compact=ultra&apiKey=fcba8c3eabd5419de1c7`,
      )
      .then(res => {
        this.setState({
          arsToUsd: Math.round(res.data.USD_ARS * 100) / 100,
          arsToEur: Math.round(res.data.EUR_ARS * 100) / 100,
        });
      });
  }
  handleChange = e => {
    this.setState({ [e.target.usdConvert]: e.target.value });
  };
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={Dollar} />
                <Card.Body>
                  <Card.Title>Dolar</Card.Title>
                  <Card.Text>${this.state.arsToUsd}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={Euro} />
                <Card.Body>
                  <Card.Title>EURO</Card.Title>
                  <Card.Text>${this.state.arsToEur}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={BitCoin} />
                <Card.Body>
                  <Card.Title>BitCoin</Card.Title>
                  <Card.Text>
                    ${Math.round(this.state.arsToUsd * 10144.965)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <hr />
          <div className="row">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text
                  type="number"
                  value={this.state.usdConvert}
                  onChange={this.handleChange}
                >
                  $
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
          </div>
          <div className="row">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th colSpan="2">Moneda</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">Dolar</td>
                  <td>{this.usdConvert}</td>
                </tr>
                <tr>
                  <td colSpan="2">Euro</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td colSpan="2">Bitcoin</td>
                  <td>200</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
