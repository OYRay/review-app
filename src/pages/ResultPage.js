import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ErrorPanel from '../components/ErrorPanel';
import ReviewResultPanel from '../components/ReviewResultPanel';
import TrendResultPanel from '../components/TrendResultPanel';
import results from '../data/results.json';
import { Col, Select } from 'antd';
import { AutoComplete, Input, Row, Typography,Card, Button } from "antd";
import ProgressBar from "../components/ProgressBar";
import WordCloud from '../components/WordCloud';
const { Title } = Typography;


const { Option } = Select;


// const durationOption = [
//   {
//     label: "week",
//     value: "week",
//     key: '0',
//   },
//   {
//     label: "month",
//     value: "month",
//     key: '1',
//   },
//   {
//     label: 'half year',
//     value: "half-year",
//     key: '2',
//   },
// ];

const data = [
  { text: 'Zoo', size: 30 },
  { text: 'Animal', size: 50 },
  { text: 'Shuttle Bus', size: 40 },
  { text: 'Feeding', size: 20 },
  { text: 'Bird', size: 60 },
  { text: 'Exhibit', size: 45 },
  { text: 'Rainforest', size: 35 },
  { text: 'Tram', size: 25 },
  { text: 'Education', size: 55 },
  { text: 'Conservation', size: 40 },
  { text: 'Wildlife', size: 50 },
  { text: 'Aquarium', size: 30 },
  { text: 'Reptile', size: 45 },
  { text: 'Mammal', size: 35 },
  { text: 'Safari', size: 60 },
  { text: 'Photography', size: 25 },
  { text: 'Kids', size: 20 },
  { text: 'Family', size: 55 },
  { text: 'Shows', size: 40 },
  { text: 'Tour', size: 45 },
];

const ResultPage = () => {
  const { id } = useParams();
  const [err, setErr] = useState(true);
  const [loading, setLoading] = useState(true);
  const [resultData, setResultData] = useState({});
  const [duration, setDuration] = useState("all");

  const fetchResults = () => {
    // get result from data
    try {
      const resultObj = results[id];
      if (resultObj) {
        setResultData(resultObj);
        setErr(false);
        setLoading(false);
      }
      else {
        setLoading(false);
        setErr(true);
      }
    } catch (exceptionVar) {
      setErr(true);
      setLoading(false);
    }
  }

  const handleDurationChange = (value) => {
    setDuration(value);
  };
  const reviewAnalysis = () =>{
    return (
      <Row style={{ width: "100%"}} gutter={8} justify="space-between" align="bottom">
        <Col>
          <Title level={4}>Review Analysis</Title>
        </Col>
        <Col>
          <Row gutter={8} justify="left" align="middle">
            <Col ><p>See the results for </p></Col>
            <Col>
              <Select defaultValue="all" style={{ width: 150 }} onChange={handleDurationChange}>
                <Option value="all">all reviews</Option>
                <Option value="week">recent week</Option>
                <Option value="month">recent month</Option>
                <Option value="halfYear">recent half year</Option>
                <Option value="year">recent year</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  useEffect(() => {
    fetchResults();
  }, []); 

  return (
    <div>
      {loading ? (
        <ProgressBar />
        ) : (
        <div style={{ marginLeft: "5%", marginRight: "5%", height: "100%"}}> {!err ? (
          <div>
            <Card style={{marginBottom: 15, backgroundColor: '#f9f9f9'}}> 
            <Row>
              <Title>{id}</Title>
              {/* <WordCloud data={data} /> */}
            </Row>
            <Row>
            </Row>

            </Card>
            
            <Row gutter={8} justify="left" align="top">
              <Col span={16}>
                
                
                <Card title={reviewAnalysis()} 
                    style={{backgroundColor: '#f9f9f9'}}>
                  <ReviewResultPanel result={resultData[duration]}/> 
                </Card>
              </Col>
              <Col span={8}>
                
                <Card title={<Title level={4}>Trend Analysis</Title>} 
                      style={{backgroundColor: '#f9f9f9'}}> 
                    <TrendResultPanel />
                </Card>
              </Col>
            </Row>
          </div>
          ) : ( 
          <ErrorPanel /> 
          )
        }
        </div>
      )}
    </div>
  );
};

export default ResultPage;
