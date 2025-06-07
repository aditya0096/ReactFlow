// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode id={id} data={data} type="Output Node">
      <label>
        Type:
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
