import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import ResultPanel from "../components/ReviewResultPanel";
import ErrorPanel from "../components/ErrorPanel";
import TagSelection from "../components/TagSelection";
import SearchOptions from "../data/SearchOptions";

const ExplorePage = ({}) => {
  const navigate  = useNavigate();

  const [searchOptions, setSearchOptions] = useState([]);
  // const [result, setResult] = useState(null);

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
    // find all places
    navigate(`/result/${value}`);
  };
  
  return (
    <div className="centered-content" style={{ marginTop: "15%", height: "100%"}}>
     <TagSelection />
    </div>
  );
}

export default ExplorePage;
