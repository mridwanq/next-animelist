import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList/index.';
import { getAnimeResponse } from './lib/api-lib';

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=12');

  return (
    <>
      <section className='bg-color-secondary'>
        <Header title='Most Popular' linkTitle='Show All' linkHref='/popular' />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
