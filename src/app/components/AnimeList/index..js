import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className='cursor-pointer'>
      <Image
        src={images}
        alt=''
        width={350}
        height={350}
        className='w-full max-h-64 object-cover'
      />
      <h2 className='font-bold md:text-2xl sm:text-md p-4'>{title}</h2>
    </Link>
  );
};

export default AnimeList;
