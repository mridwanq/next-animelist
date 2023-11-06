import { authUserSession } from '@/lib/auth-libs';
import Link from 'next/link';

const UserButtonAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? 'Sign Out' : 'Sign In';
  const actionURL = user ? '/api/auth/signout' : '/api/auth/signin';
  return (
    <div className='flex gap-2 justify-between'>
      {user ? (
        <Link href='/users/dashboard' className='py-2'>
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className='bg-color-dark text-color-low_accent py-2 px-12 rounded-md'
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserButtonAction;
