import { FileSearch } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
      <div className='flex justify-center items-center gap-4 flex-col'>
        <FileSearch height={32} className='text-color-accent' />
        <h3 className='text-color-accent text-2xl font-bold'>404 NOT FOUND</h3>
        <Link
          href='/'
          className='text-color-primary hover:text-color-accent transition-all underline'
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Page;
