import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Select, Button, Modal, Row, Typography, List, Col, Tag} from 'antd';
import FeaturesData from '../data/FeatureData';
import Options from '../data/FeatureOptions';


const {Title} = Typography;
const { Option } = Select;



const TagSelection = ({}) => {
  const navigate  = useNavigate();

  const [selectedTags, setSelectedTags] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleChange = (value) => {
    setSelectedTags(value);
  };

  const handleSelect = (value) => {
    navigate(`/result/${value}`);
  };

  const handleSearch = () => {
    // alert(selectedTags);
    const results = FeaturesData.filter((item) =>
      selectedTags.every((tag) => item.features.includes(tag))
    );
    setFilteredPlaces(results);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    return (
      <Tag
        color={Options[value]}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3, padding: 4, fontSize: 14}}
        tagRender={tagRender}
      >
        {label}
      </Tag>
    );
  };

  return (
    <div style={{ minWidth: "200px", maxWidth: "600px", width: "80%", margin: "0 auto", align: "middle" }}>
      <Row>
        <Title className="centered-title" level={2}>Find a place you are interested in</Title>
      </Row>
      <Row gutter={6} justify="space-between" align="bottom">
        <Col span={20}> 
          <Select
            size="large"
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select your interests"
            value={selectedTags}
            onChange={handleChange}
            optionLabelProp="label"
            tagRender={tagRender}
            defaultValue={['nature', 'family']}
            // options={options}
          >
            {Object.keys(Options).map((tag) => (
              <Option key={tag} value={tag} label={tag}>
                {/* <div style={{ width: "fit-content", paddingLeft: 3, paddingRight: 3, borderRadius: 3, backgroundColor: tagColors[tag] }}>
                  {tag}
                </div> */}
                {tag}
              </Option>
            ))}
          </Select>
        </Col>
          
        <Col> 
          <Button size='large' style={{ marginTop: 16 }} onClick={handleSearch}>
            Search
          </Button>
        </Col>
          
      </Row>
      
      <Modal
        title="Places"
        open={visible}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            Close
          </Button>
        ]}
      >
        {filteredPlaces.length > 0 ? (
          
        <div> 
          <List
            dataSource={filteredPlaces}
            renderItem={(item, index) => (
              <List.Item>
                <Row justify="left" align="bottom" style={{ width: "100%" }}>
                  <Col span={20}>
                    <Row style={{ display: "flex", justifyContent: "space-between", width: "100%", margin: 0}}>
                      <div style={{marginBottom: 20 }}>
                        <Title onClick={() => handleSelect(item.name)}  level={4}>{item.name}</Title> 
                      </div>
                    </Row>
                    <Row justify="left" style={{ display: "flex", justifyContent: "left", width: "100%" }}>
                      {item.tags.map(tag => ( <Tag color={Options[tag]}>{tag}</Tag>))}
                    </Row>
                  </Col>
                  
                  {/* <Col span={4} >
                    <Button> Find more</Button>
                  </Col> */}
                    
                </Row>
              </List.Item>
            )}
          />
        </div>
        ) : (
          <p>No places found.</p>
        )}
      </Modal>
    </div>
  );
};

export default TagSelection;
