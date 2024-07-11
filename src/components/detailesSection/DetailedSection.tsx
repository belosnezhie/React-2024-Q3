import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PeopleSearchResp, SearchResp } from '../../model/TypesStarWars';
import { ApiService, apiService } from '../../services/ApiService';

import './DetailedSection.css';

const DetailedSection = () => {
  const service: ApiService = apiService;
  const [characterData, setCharacterData] = useState<PeopleSearchResp>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageParams] = useState(Number(searchParams.get('page')));
  const [isDestroyed, setDestroyed] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigation = useNavigate();

  const getCharacterData = useCallback(async (): Promise<SearchResp> => {
    setLoading(true);
    const searchQuery: string = String(searchParams.get('search'));

    const resp: SearchResp = await service.getSeachedData(searchQuery);

    setCharacterData(resp.results[0]);
    setLoading(false);

    return resp;
  }, [searchParams, service]);

  useEffect(() => {
    void getCharacterData();
  }, [getCharacterData]);

  const handleClick = () => {
    setSearchParams({ page: String(pageParams) });
    navigation('/');
    setDestroyed(true);
  };

  return isDestroyed ? null : (
    <section className="detailed_results">
      {isLoading ? (
        <div className="spinner" />
      ) : (
        <>
          {characterData ? (
            <>
              <p>Name: {characterData.name}</p>
              <p>Birth year: {characterData.birth_year}</p>
              <p>Hair color: {characterData.hair_color}</p>
              <p>Skin color: {characterData.skin_color}</p>
              <p>Eye color: {characterData.eye_color}</p>
              <p>Gender: {characterData.gender}</p>
            </>
          ) : null}
          <button className="close_detailed" onClick={handleClick}>
            X
          </button>
        </>
      )}
    </section>
  );
};

export default DetailedSection;
