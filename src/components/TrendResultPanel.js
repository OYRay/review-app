import React from "react";
import TrendBarChart from "./TrendBarChart";
import SentimentBarChart from "./SentimentTrendBarChart"
import {  Row, Typography, Col } from "antd";
const { Title } = Typography;


// import { Card } from "antd";

const TrendResultPanel = ({ result }) => {
  return (
    <div>
      <Row>
        {/* <Col span={12}>
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
        </Col> */}
        <TrendBarChart />
        
      </Row>
      
      
      <Row justify="left" align="middle" style={{paddingTop: 100}}>
        <SentimentBarChart />
        {/* <Col span={12}> 
          <CustomPieChart title="Visitor Type Analysis" data={result.visitorType}/>
        </Col>
        <Col span={12}>
          <CustomPieChart title="Visitor Location Analysis" data={result.visitorLocation}/>
        </Col> */}
      </Row>
    </div>
  );
};

export default React.memo(TrendResultPanel);