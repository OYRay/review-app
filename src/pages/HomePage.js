import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import ResultPanel from "../components/ResultPanel";
import ErrorPanel from "../components/ErrorPanel";
import ProgressBar from "../components/ProgressBar";
import SearchOptions from "../data/SearchOptions";

const HomePage = ({}) => {
  const navigate  = useNavigate();

  const [searchOptions, setSearchOptions] = useState([]);
  const [result, setResult] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState(false);
  const handleSearch = (value) => {
    if (value) {
      const searchResults = SearchOptions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      const autoCompleteOptions = searchResults.map((result) => ({
        value: result,
      }));
      setSearchOptions(autoCompleteOptions);
    } else {
      setSearchOptions([]);
    }
  }

  const handleSelect = (value) => {
    setResult(value);
    navigate(`/result/${value}`);
  };
  
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
     
      <SearchBar searchOptions={searchOptions} 
                handleSearch={handleSearch} 
                handleSelect= {handleSelect}/>
      
      {result ? (

        <ResultPanel result={result}/>

      ) : null}
      
     
    </div>
  );
}

export default HomePage;
