import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import ResultsTable from './components/ResultsTable/ResultsTable';
import SearchBar from './components/SearchBar/SearchBar';
import { API_URL } from './constants';

function App() {
  const [pincode, setPinCode] = useState('110081');
  const [pincodeData, setPinCodeData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const onPincodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const onResponseGet = (res) => {
    const { Status: status, PostOffice: postOffice } = res[0];
    const is404 = status === '404' || !postOffice;
    const postOfficeData = is404 ? [] : postOffice;
    setNotFound(is404);
    setPinCodeData(postOfficeData);
  };

  const onSearch = async () => {
    fetch(`${API_URL}/${pincode}`)
      .then((res) => res.json())
      .then((res) => onResponseGet(res));
  };

  return (
    <div className='App'>
      <Header />
      <SearchBar
        pincode={pincode}
        onPincodeChange={onPincodeChange}
        onSearch={onSearch}
      />
      {notFound && <NotFound pincode={pincode} />}
      {!!pincodeData.length && <ResultsTable pincodeData={pincodeData} />}
    </div>
  );
}

export default App;
