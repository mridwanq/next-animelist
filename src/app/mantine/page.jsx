'use client';

import { useCounter } from '@mantine/hooks';

const Page = () => {
  const [number, setNumber] = useCounter(0, { min: 0, max: 10 });
  return (
    <>
      <div className='flex justify-center items-center gap-2 px-2 py-2 text-2xl text-color-accent min-h-screen mx-auto '>
        <h1>{number}</h1>
        <button
          onClick={setNumber.increment}
          className='hover:text-color-primary border border-color-primary'
        >
          Increment
        </button>
        <button
          onClick={setNumber.decrement}
          className='hover:text-color-primary border border-color-primary'
        >
          Decrement
        </button>
        <button
          onClick={setNumber.reset}
          className='hover:text-color-primary border border-color-primary'
        >
          Reset
        </button>
        <button
          onClick={() => setNumber.set(8)}
          className='hover:text-color-primary border border-color-primary'
        >
          Set 8
        </button>
      </div>
    </>
  );
};

export default Page;
