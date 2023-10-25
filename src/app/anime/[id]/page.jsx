import { getAnimeResponse } from '@/app/lib/api-lib';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import { data } from 'autoprefixer';
import Image from 'next/image';
import React from 'react';

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className='pt-4 px-4'>
        <h2 className='text-2xl text-color-primary'>
          {anime.data.title} - {anime.data.year}
        </h2>
      </div>
      <div className='pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto'>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
          <h3>RANK</h3>
          <div>{anime.data.rank}</div>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
          <h3>SCORE</h3>
          <div>{anime.data.score}</div>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
          <h3>MEMBER</h3>
          <div>{anime.data.members}</div>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
          <h3>EPISODE</h3>
          <div>{anime.data.episodes}</div>
        </div>
      </div>
      <div className='pt-4 px-4 sm:flex-nowrap flex flex-wrap gap-2 text-color-primary'>
        <Image
          className='w-full rounded object-cover'
          width={250}
          height={250}
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
        />
        <p className='text-justify text-xl'>{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
