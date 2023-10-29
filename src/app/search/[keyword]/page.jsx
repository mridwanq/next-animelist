import { getAnimeResponse } from '@/lib/api-lib';
import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList/index.';

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse('anime', `q=${decodedKeyword}`);

  return (
    <>
      <section className='bg-gray-800'>
        <Header title={`Search for ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
