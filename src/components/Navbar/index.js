import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className='bg-yellow-400'>
      <div className='flex md:flex-row flex-col justify-between p-4 gap-2'>
        <Link href='/' className='font-bold text-black text-2xl'>
          ANIME LIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
