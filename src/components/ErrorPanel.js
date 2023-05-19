import React from "react";
import ExclamationCircleTwoTone from '@ant-design/icons';

const ErrorPanel = ({ score }) => {
  return (
    <div>
        <ExclamationCircleTwoTone />
        <p>An error occurred while getting the results. Please try again.</p>
    </div>
  );
};

export default ErrorPanel;
