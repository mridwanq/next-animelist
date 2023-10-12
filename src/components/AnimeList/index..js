import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
      {api.data.map((anime) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/${anime.mal_id}`} className='cursor-pointer'>
            <Image
              src={anime.images.webp.image_url}
              alt=''
              width={350}
              height={350}
              className='w-full max-h-64 object-cover'
            />
            <h2 className='font-bold md:text-2xl text-white sm:text-md p-4'>
              {anime.title}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
