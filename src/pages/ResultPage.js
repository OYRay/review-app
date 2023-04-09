import React from 'react';
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Result for {id}</h1>
      <p>Display the result related to {id} here.</p>
    </div>
  );
};

export default ResultPage;
