import React from "react";
import { Spin } from 'antd';
import Icon from '@ant-design/icons';

const ProgressBar = () => {
  const antIcon = () => (<Icon type="loading" style={{ fontSize: 24 }} spin />);
  return (
    <div>
      <Spin spinning={true} indicator={antIcon} />
      <p>Loading results, please wait...</p>
    </div>
  );
};

export default ProgressBar;
