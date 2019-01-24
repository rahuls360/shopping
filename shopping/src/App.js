import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    product: {}
  };

  nameRef = React.createRef();

  storeName = event => {
    this.setState({ name: this.nameRef.current.value });
    // window.location = "/products";
    this.props.history.push("products");
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h3>Welcome to our Store</h3>
        <form onSubmit={this.storeName}>
          <input type="text" placeholder="  Name" required ref={this.nameRef} />
          <input type="submit" value="Enter Store" />
        </form>
      </>
    );
  }
}

export default App;
