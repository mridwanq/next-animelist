import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='bg-cyan-500'>
      <div className='flex md:flex-row flex-col justify-between p-4 gap-2'>
        <Link href='/' className='font-bold text-white text-2xl'>
          ANIME LIST
        </Link>
        <input placeholder='search anime...' className='rounded-md' />
      </div>
    </header>
  );
};

export default Navbar;
