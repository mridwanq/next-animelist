import Link from 'next/link';
import InputSearch from './InputSearch';
import UserButtonAction from './UserActionButton';

const Navbar = () => {
  return (
    <header className=' bg-color-low_accent'>
      <div className='flex md:flex-row flex-col justify-between md:items-center p-4 gap-'>
        <Link href='/' className='font-bold text-2xl'>
          ANIME LIST<span className='animate-pulse'>🚀</span>
        </Link>
        <InputSearch />
        <UserButtonAction />
      </div>
    </header>
  );
};

export default Navbar;
