import React, { Component } from "react";
import {
  Card,
  InputGroup,
  FormControl,
  Table,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import Dollar from "../../assets/dollar.png";
import Euro from "../../assets/euro.png";
import axios from "axios";
import "./style.scss";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arsToUsd: 0,
      arsToEur: 0,
      inputValue: 0,
    };
  }

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
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <Container>
          <Row>
            <Col md={{ offset: 1 }}>
              <Card
                bg="info"
                text="white"
                className="text-center"
                style={{ width: "10rem" }}
              >
                <Card.Img className="card-image" variant="top" src={Dollar} />
                <Card.Body>
                  <Card.Title>Dolar</Card.Title>
                  <Card.Text>${this.state.arsToUsd}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ offset: 2 }}>
              <Card
                bg="info"
                text="white"
                className="text-center"
                style={{ width: "10rem" }}
              >
                <Card.Img className="card-image" variant="top" src={Euro} />
                <Card.Body>
                  <Card.Title>EURO</Card.Title>
                  <Card.Text>${this.state.arsToEur}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr />
          <div className="row">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
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
                  <td>$ {this.state.inputValue * this.state.arsToUsd}</td>
                </tr>
                <tr>
                  <td colSpan="2">Euro</td>
                  <td>$ {this.state.inputValue * this.state.arsToEur}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    );
  }
}
