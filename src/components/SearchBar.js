import React from "react";
import { AutoComplete, Input, Row, Typography,Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../App.css";

const { Title } = Typography;

const SearchBar = ({searchOptions, handleSearch, handleSelect}) => {
  const sampleSearchs = [
    "Singapore Zoo",
    "National Museum of Singapore",
    "Marina Bay",
    "National Orchid Garden",
    "Chinatown"
  ];

  
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Row>
        <Title level={2}>Singapore Amusement Advisor</Title>
        <AutoComplete
          options={searchOptions}
          onSelect={handleSelect}
          onSearch={handleSearch}
          placeholder="Find Singapore Amusement"
          style={{ width: "100%"}}
        >
          <Input.Search size="large" style={{colorBgContainer:'#b3cbf3'}} enterButton={<SearchOutlined/> }/>
        </AutoComplete> 
      </Row>
    
      <Row style={{ paddingTop: "12px" }}>
      <Space wrap>
          {sampleSearchs.map((search) => 
              <Button key={search} className="searchOptionButton" size='small' onClick={() => handleSelect(search)}>
                {search}
              </Button>
          )}
      </Space> 
      </Row>
        
    </div>
  );
};

export default SearchBar;
