// import { GetServerSideProps } from 'next';
import { usePathname } from 'next/navigation';
// import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/StateHooks';
// import useLocalStorage from '../../hooks/UseLocalStorage';
import {
  // starWarsApi,
  useFetchCharactersQuery,
} from '../../services/StarWarsApi';
import { selectPage } from '../../store/pageSlice/PageSlice';
// import { wrapper } from '../../store/Store';

import Card from './Card';
import styles from './Main.module.css';

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async () => {
//     await store.dispatch(
//       starWarsApi.endpoints.fetchCharacters.initiate({
//         searchQuery: '',
//         pageNumber: 1,
//       }),
//     );

//     console.log(store);

//     return { props: {} };
//   });

const ResultsList = () => {
  const pathname = usePathname();
  // const { query } = useLocalStorage();
  const currentPage = useAppSelector(selectPage);

  // const { data, error } = useFetchCharactersQuery({
  //   searchQuery: query,
  //   pageNumber: currentPage,
  // });

  const { data, error } = useFetchCharactersQuery({
    searchQuery: '',
    pageNumber: 1,
  });

  if (error || !data) {
    return (
      <p className={styles.placeholder}>Oops! there is no such character.</p>
    );
  }

  return (
    <>
      <section
        className={`${styles.resultsList} ${pathname.includes('detailed') ? styles.list : styles.table}`}
      >
        {data.results.map((obj, index) => {
          return (
            <Card
              cardData={obj}
              key={index}
              pageData={currentPage}
              searchData={obj.name}
            />
          );
        })}
      </section>
    </>
  );
};

export default ResultsList;
