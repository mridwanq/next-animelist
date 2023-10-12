'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRef } from 'react';

const InputSearch = () => {
  const searchRef = useRef();

  const handleSearch = () => {
    alert(searchRef.current.value);
  };
  return (
    <div className='relative'>
      <input
        placeholder='search anime...'
        className='p-2 w-full rounded-md'
        ref={useRef}
      />

      <button className='absolute top-2 end-2' onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
