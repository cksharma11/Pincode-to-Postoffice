import React from 'react';

const ResultsTable = ({ pincodeData }) => {
  return (
    <table id='pincodeData'>
      <tr>
        {Object.keys(pincodeData[0]).map((field) => (
          <th key={field}>{field}</th>
        ))}
      </tr>
      {pincodeData.map((data) => (
        <tr>
          {Object.keys(data).map((key) => (
            <td key={JSON.stringify(data[key])}>{data[key]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default ResultsTable;
