import React from 'react';

const SearchBar = ({ pincode, onPincodeChange, onSearch }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        className='pincode-search'
        value={pincode}
        onChange={onPincodeChange}
      />
      <button onClick={onSearch} className='search-button'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
