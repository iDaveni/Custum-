import React from "react";
import Image from "components/Versions/Image";

class PrevieAsset extends React.Component {
  render() {
    return <Image src={this.props.src} width={300} height={300} />;
  }
}

export default PrevieAsset;
