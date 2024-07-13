import { useCallback, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import Header from '../../components/header/Header.tsx';
import ResultsList from '../../components/main/ResultsList.tsx';
import Pagination from '../../components/pagination/Pagination.tsx';
import useLocalStorage from '../../hooks/UseLocalStorage';
import { PeopleSearchResp, SearchResp } from '../../model/TypesStarWars';
import { ApiService } from '../../services/ApiService';

interface MainPageProps {
  service: ApiService;
}

const MainPage = ({ service }: MainPageProps) => {
  const { setItemToLS, query } = useLocalStorage();

  const [charactersData, setCharactersData] = useState<PeopleSearchResp[] | []>(
    [],
  );
  const [isLoading, setLoading] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchData = useCallback(
    async (searchQuery: string): Promise<SearchResp> => {
      setLoading(true);

      setItemToLS(searchQuery);

      const res: SearchResp = await service.getSeachedData(searchQuery);

      setCharactersData(res.results);
      setSearchParams({ search: searchQuery });
      setLoading(false);

      return res;
    },
    [service, setSearchParams],
  );

  const handlePageChange = useCallback(
    async (pageNumber: number): Promise<SearchResp> => {
      setLoading(true);

      const res: SearchResp = await service.getDefaultData(pageNumber);

      setCharactersData(res.results);
      setLoading(false);
      setSearchParams({ page: String(pageNumber) });
      setActivePage(pageNumber);

      return res;
    },
    [service, setSearchParams],
  );

  const checkCurrentPage = useCallback(() => {
    const currentPage: number =
      Number(searchParams.get('page')) === 0
        ? 1
        : Number(searchParams.get('page'));

    return currentPage;
  }, [searchParams]);

  const getData = useCallback(async () => {
    setLoading(true);

    if (query) {
      await searchData(query);

      setLoading(false);
    } else {
      const currentPage = checkCurrentPage();

      const res: SearchResp = await service.getDefaultData(currentPage);

      setCharactersData(res.results);
      setActivePage(currentPage);
      setLoading(false);
    }
  }, [searchData, service, checkCurrentPage, query]);

  useEffect(() => {
    void getData();
  }, [getData]);

  return (
    <>
      <div className="wrapper">
        <Header
          updateCartsCallback={async (searchQuery: string): Promise<void> => {
            await searchData(searchQuery);
          }}
        />
        <main className="page">
          {isLoading ? (
            <div className="spinner" data-testid="spinner_test" />
          ) : (
            <>
              <section className="results_section">
                <ResultsList
                  cardCharactersData={charactersData}
                  pageSearchParam={activePage}
                />
              </section>
              <Pagination
                updatePageCallback={handlePageChange}
                currentPage={activePage}
                pagesCount={9}
              />
            </>
          )}
          <div className="yoda" />
        </main>
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;
