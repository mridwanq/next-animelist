import { getAnimeResponse } from '@/lib/api-lib';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';
import React from 'react';
import CollectionButton from '@/components/AnimeList/CollectionButton';
import { authUserSession } from '@/lib/auth-libs';
import prisma from '@/lib/prisma';
import CommentInput from '@/components/AnimeList/CommentInput';
import CommentBox from '@/components/AnimeList/CommentBox';

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className='px-4'>
        <h2 className='py-2 text-2xl text-color-primary'>
          {anime.data.title} - {anime.data.year}
        </h2>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
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
      <div className=' pt-4 px-4 sm:flex-nowrap flex flex-wrap gap-2 text-color-primary'>
        <Image
          className='w-full rounded object-cover'
          width={250}
          height={250}
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
        />
        <p className='text-justify text-xl'>{anime.data.synopsis}</p>
      </div>
      <div className='p-4'>
        <h3 className='text-color-primary text-2xl mb-2'>All Comments</h3>
        <CommentBox anime_mal_id={id} />

        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
