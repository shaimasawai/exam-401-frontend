import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
class FavWatch extends Component {
  constructor(poops) {
    super(props);
    this.state = {
      dataDB: [],
      showUpdata: false,
      id: "",
      title: "",
      description: "",
      toUSD: "",
      image_url: "",
    };
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/watchnew`).then((res) => {
      this.setState({ dataDB: res.data });
    });
  };
  handelDelete = (id) => {
    let ID = id;
    let config = {
      method: "DELET",
      baseURL: process.env.REACT_APP_BACKEND_URL,
      Url: `/watchnew/${ID}`,
    };
    axios(config).then((response) => {
      this.setState({ dataDB: response.data });
    });
  };
  handleimg = (event) => {
    this.setState({ image_url: event.target.value });
  };
  handletitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handledescription = (event) => {
    this.setState({ description: event.target.value });
  };
  handletoUSD = (event) => {
    this.setState({ toUSD: event.target.value });
  };
  handelUpdata = (id, title, description, image_url) => {
    this.setState({
      id: id,
      title: title,
      description: description,
      image_url: image_url,
      showUpdata: true,
    });
  };
  handleUpdataForm = (id) => {
    let IDS = id;
    let confid = {
      method: "PUT",
      baseURL: process.env.REACT_APP_BACKEND_URL,
      Url: `/watchnew/${ID}`,
      data: {
        image_url: this.state.image_url,
        title: this.state.title,
        description: this.state.description,
      },
    };
    axios.setState({ dataDB: response.data });
  };

  render() {
    return (
      <div>
        {this.state.dataDB.map((item) => {
          return (
            <Card>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body>
                <Card.Title> img</Card.Title>
                <Card.description>{item.description}</Card.description>
                <Button
                  onClick={() =>
                    this.handelSubmit(image_url, title, description)
                  }
                  variant="danger"
                >
                  {" "}
                  Add-To-watch-list
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default FavWatch;
