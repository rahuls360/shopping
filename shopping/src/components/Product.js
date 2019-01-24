import React from "react";
import { withRouter } from "react-router";

class Product extends React.Component {
  storeProduct = () => {
    let state = this.props.product;
    this.setState({ product: state });
  };

  render() {
    return (
      <div className="product">
        <h3 className="product-title">{this.props.product.name}</h3>
        <h4 className="price">Rs {this.props.product.price}</h4>
        <img src={this.props.product.image} alt={this.props.product.name} />
        <br />
        <button
          onClick={() => {
            this.props.history.push("/product/" + this.props.index);
          }}
        >
          Buy Now
        </button>
      </div>
    );
  }
}
export default withRouter(Product);
