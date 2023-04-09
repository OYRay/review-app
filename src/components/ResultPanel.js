import React from "react";
// import { Card } from "antd";

const ResultPanel = ({ result }) => {
  return (
    <div>
        <p>Showing the result: {result}</p>
    </div>
  );
};

export default React.memo(ResultPanel);