import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList/index.';
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from '../lib/api-lib';

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=12');
  let recommended = await getNestedAnimeResponse(
    'recommendations/anime',
    'entry'
  );
  recommended = reproduce(recommended, 4);

  return (
    <>
      <section className='bg-color-secondary'>
        <Header title='Most Popular' linkTitle='Show All' linkHref='/popular' />
        <AnimeList api={topAnime} />
      </section>
      <section className='bg-color-secondary'>
        <Header title='Recommended' linkTitle='Show All' linkHref='/popular' />
        <AnimeList api={recommended} />
      </section>
    </>
  );
};

export default Page;
