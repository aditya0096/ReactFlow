import { useEffect, useState } from "react";
import BaseNode from "./baseNode";
import { useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  const update = useUpdateNodeInternals();
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [dynamicHandles, setDynamicHandles] = useState([]);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(150);

  // Resize node + update dynamic handles
  useEffect(() => {
    const matches = currText.match(/{{(.*?)}}/g);
    const uniqueVars = matches
      ? [...new Set(matches.map((v) => v.slice(2, -2).trim()))]
      : [];

    const dynamic = uniqueVars.map((variable, index) => ({
      id: variable,
      variableName: variable,
      top: 50 + index * 20,
    }));

    setDynamicHandles(dynamic);

    const length = currText.length;
    const lines = currText.split("\n").length;
    setWidth(Math.max(200, length * 7));
    setHeight(Math.max(150, 120 + lines * 10));
    update();
  }, [currText, update]);

  return (
    <BaseNode
      id={id}
      data={data}
      type="Text"
      style={{ width, height }}
      dynamicHandles={dynamicHandles}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{ width: "100%", marginTop: 4 }}
        />
      </label>
    </BaseNode>
  );
};
