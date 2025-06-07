import React from "react";
import BaseNode from "./baseNode";

const ImageNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} label="Image">
      <img src="https://via.placeholder.com/100" alt="Image" />
    </BaseNode>
  );
};

export default ImageNode;
