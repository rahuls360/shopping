import React from "react";

class Buy extends React.Component {
  render() {
    return (
      <>
        <h3>Working</h3>
        {/* {console.log(this.props.match)} */}
        <h3>{this.props.match.params.id}</h3>
      </>
    );
  }
}

export default Buy;
