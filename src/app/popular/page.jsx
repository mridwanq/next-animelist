'use client';
import AnimeList from '@/components/AnimeList/index.';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import React, { useEffect, useState } from 'react';
import { getAnimeResponse } from '../../lib/api-lib';

// eslint-disable-next-line @next/next/no-async-client-component
const PopularPage = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse('top/anime', `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`POPULAR ANIME #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default PopularPage;
