import { authUserSession } from '@/lib/auth-libs';
import prisma from '@/lib/prisma';
import React from 'react';
import Header from '@/components/Dashboard/Header';

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <>
      <section className='mt-4 px-4 w-full'>
        <Header title={'My Comment'} />
        <div className='grid grid-cols-1 py-2 gap-4'>
          {comments.map((comment) => {
            return (
              <>
                <a
                  href={`/anime/${comment.anime_mal_id}`}
                  className='bg-color-primary text-color-secondary '
                  key={comment.id}
                >
                  <p className='text-xl'>{comment.anime_title}</p>
                  <p className='italic'>{comment.comment}</p>
                </a>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
