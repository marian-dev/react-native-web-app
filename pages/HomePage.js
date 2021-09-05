import React, { useState, useEffect, Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { list } from "../actions/cars.js";

class HomePage extends Component {
  createListItems() {
    if (this.props.cars != null) {
    return this.props.cars.map((car) => {
      return (
        <li key={car.id} > 
          <p>
            Model: {car.model}
          </p>
          <p>
            Color: {car.color}
          </p>
          <p>
            Plate number: {car.plate_number}
          </p>
        </li>
      );
    });
  } else {
    return ('');
  }
  }

  componentDidMount() {
    this.props.list(localStorage.getItem("token"));
  }

  componentDidUpdate() {
    //
  }

  render() {
    return (
      <>
        <h3>Cars list</h3>
        <ul>
          {this.createListItems()}
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
  }
}

export default connect(mapStateToProps, {list})(HomePage);