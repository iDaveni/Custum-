import React from "react";
let _ = require("lodash");

function memo(Component) {
  return class extends React.Component {
    shouldComponentUpdate(thisProps, nextProps) {
      if (_.isEqual(thisProps, nextProps)) {
        return false;
      }
      return true;
    }
    render() {
      return <Component {...this.props} />;
    }
  };
}

export default memo;
