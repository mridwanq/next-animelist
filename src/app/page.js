import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList/index.';

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <section className='bg-gray-800'>
        <Header title='Most Popular' linkTitle='Show All' linkHref='/popular' />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
