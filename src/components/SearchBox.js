import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  console.log("Rendered SearchBox");
  return (
    <div className='tc pa2'>
      <input
       className='pa3 ba b--green bg-lightest-blue'
       type='search'
       onChange={searchChange}
       placeholder='search robots' />
    </div>
  );
}

export default SearchBox;