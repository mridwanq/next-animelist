import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className='fixed w-full bg-color-low_accent'>
      <div className='flex md:flex-row flex-col justify-between md:items-center p-4 gap-'>
        <Link href='/' className='font-bold text-2xl'>
          ANIME LIST<span className='animate-pulse'>🚀</span>
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
