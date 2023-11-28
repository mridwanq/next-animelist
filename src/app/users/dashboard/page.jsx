import { authUserSession } from '@/lib/auth-libs';
import Image from 'next/image';
import Link from 'next/link';

const Page = async () => {
  const user = await authUserSession();
  console.log('user', user);
  return (
    <div className='text-color-primary mt-8 flex flex-col justify-center items-center'>
      <h5 className='text-2xl font-bold'>Welcome, {user?.name}</h5>
      <Image src={user?.image} alt='...' width={250} height={250} />
      <div className='py-8 gap-4 flex flex-wrap'>
        <Link
          className='bg-color-accent text-color-dark font-bold px-4 py-4 text-xl'
          href='/users/dashboard/collection'
        >
          My Collection
        </Link>
        <Link
          className='bg-color-accent text-color-dark font-bold px-4 py-4 text-xl'
          href='/users/dashboard/comment'
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
