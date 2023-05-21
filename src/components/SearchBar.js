import React from "react";
import { AutoComplete, Input, Row, Typography,Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../App.css";

const { Title } = Typography;

const SearchBar = ({searchOptions, handleSearch, handleSelect}) => {
  const sampleSearchs = [
    "Singapore Zoo",
    "National Museum of Singapore",
    'Merlion Park',
    "National Orchid Garden",
    'Gardens by the Bay',
  ];

  
  return (
    <div style={{ minWidth: "200px", maxWidth: "600px", width: "60%", margin: "0 auto", align: "middle" }}>
      <Row>
        <Title className="centered-title" level={2}>Explore Singapore</Title>
        <AutoComplete
          options={searchOptions}
          onSelect={handleSelect}
          onSearch={handleSearch}
          placeholder="Find Singapore Amusement"
          style={{ width: "100%"}}
        >
          <Input.Search size="large" />
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
