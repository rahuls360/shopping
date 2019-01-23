import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h3 className="product-title">{this.props.product.name}</h3>
        <h4 className="price">Rs {this.props.product.price}</h4>
        <img src={this.props.product.image} alt={this.props.product.name} />
        <a href={"/product/" + this.props.index}>Buy now</a>
      </div>
    );
  }
}
export default Product;
