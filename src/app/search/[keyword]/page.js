import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList/index.';

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section className='bg-gray-800'>
        <Header title={`Search for ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
