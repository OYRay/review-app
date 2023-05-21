import React from "react";
import TrendReviewNumBarChart from "./TrendReviewNumBarChart";
import TrendSentimentBarChart from "./TrendSentimentBarChart"
import {  Row, Typography, Col } from "antd";
const { Title } = Typography;


// import { Card } from "antd";

const TrendResultPanel = ({ id }) => {
  return (
    <div>
      <Row>
        <TrendReviewNumBarChart id={id}/>
      </Row>
      
      <Row justify="left" align="middle" style={{paddingTop: 100}}>
        <TrendSentimentBarChart  id={id}/>
       
      </Row>
    </div>
  );
};

export default React.memo(TrendResultPanel);