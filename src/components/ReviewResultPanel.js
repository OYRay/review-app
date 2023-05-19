import React from "react";
import SentimentRadarChart from "./SentimentRadarChart";
import CustomPieChart from "./CustomPieChart";
import RatingBarChart from "./RatingBarChart";
import {  Row, Typography, Col } from "antd";
const { Title } = Typography;


// import { Card } from "antd";

const ReviewResultPanel = ({ result }) => {
  return (
    <div>
      <Row style={{padding:0}}>
        <Col span={12}>
          <Row gutter={8} justify="left" align="bottom">
            <Col span={12}>
              <Title>{result.overallSentiment}</Title>
            </Col>
            <Col span={12}>
              <p>{result.reviewNum} reviews</p>
            </Col>
          </Row>
          <Row justify="left" align="middle">
            <RatingBarChart data={result.rating}/>
          </Row>
        </Col>

        <Col span={12}>
          <SentimentRadarChart data={result.aspectSentiment}/>
        </Col>
      </Row>
      
      <Row justify="left" align="middle">
        <Col span={12}> 
          <CustomPieChart title="Visitor Type Analysis" data={result.visitorType}/>
        </Col>
        <Col span={12}>
          <CustomPieChart title="Visitor Location Analysis" data={result.visitorLocation}/>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(ReviewResultPanel);