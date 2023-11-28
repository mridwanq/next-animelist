import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Dashboard/Header';

const Page = () => {
  return (
    <section className='mt-4 px-4 w-full'>
      <Header title={'My Collection'} />
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <Link href='/' className='relative border-2 border-color-accent'>
          <Image className='w-full' src='' alt='' width={350} height={350} />
          <div className='absolute flex items-center justify-center bottom-0 bg-color-accent h-16 w-full'>
            <h5 className='text-center text-xl'>Anime title</h5>
          </div>
        </Link>
        <Link href='/' className='relative border-2 border-color-accent'>
          <Image className='w-full' src='' alt='' width={350} height={350} />
          <div className='absolute flex items-center justify-center bottom-0 bg-color-accent h-16 w-full'>
            <h5 className='text-center text-xl'>Anime title</h5>
          </div>
        </Link>
        <Link href='/' className='relative border-2 border-color-accent'>
          <Image className='w-full' src='' alt='' width={350} height={350} />
          <div className='absolute flex items-center justify-center bottom-0 bg-color-accent h-16 w-full'>
            <h5 className='text-center text-xl'>Anime title</h5>
          </div>
        </Link>
        <Link href='/' className='relative border-2 border-color-accent'>
          <Image className='w-full' src='' alt='' width={350} height={350} />
          <div className='absolute flex items-center justify-center bottom-0 bg-color-accent h-16 w-full'>
            <h5 className='text-center text-xl'>Anime title</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
