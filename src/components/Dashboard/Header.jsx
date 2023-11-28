'use client';
import { ArrowLineLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className='flex mb-4 justify-between items-center'>
      <button className='text-color-primary' onClick={handleBack}>
        <ArrowLineLeft size={32} color='white' />
      </button>
      <h3 className='text-2xl text-color-primary  font-bold'>{title}</h3>
    </div>
  );
};

export default Header;
