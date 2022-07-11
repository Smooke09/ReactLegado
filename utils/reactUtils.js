import React from "react";

function childrenWithProps(children, props) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, props);
  });
}

export default childrenWithProps;
