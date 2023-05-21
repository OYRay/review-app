import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ErrorPanel from '../components/ErrorPanel';
import ReviewResultPanel from '../components/ReviewResultPanel';
import TrendResultPanel from '../components/TrendResultPanel';
import ReviewAnalysisData from '../data/ReviewAnalysisData.json';
import { Col, Select } from 'antd';
import { AutoComplete, Input, Row, Typography,Card, Button } from "antd";
import ProgressBar from "../components/ProgressBar";
const { Title } = Typography;


const { Option } = Select;

const ResultPage = () => {
  const { id } = useParams();
  const [err, setErr] = useState(true);
  const [loading, setLoading] = useState(true);
  const [resultData, setResultData] = useState({});
  const [duration, setDuration] = useState("all");

  const fetchResults = () => {
    // get result from data
    try {
      const resultObj = ReviewAnalysisData[id];
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
                <Option value="last two years">recent two years</Option>
                <Option value="last five years">recent five year</Option>
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
                    <TrendResultPanel id={id}/>
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
