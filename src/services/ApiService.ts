import { SearchResp } from '../model/TypesStarWars';

export class ApiService {
  async getDefaultData(pageNumber: number) {
    const defaultUrl = `https://swapi.dev/api/people/?page=${pageNumber}`;

    const resp: Response = await fetch(defaultUrl);

    if (resp.status !== 200) {
      throw new Error('Request faild!');
    }

    const data: SearchResp = <SearchResp>await resp.json();

    return data;
  }

  async getSeachedData(searchQuery: string) {
    const url = `https://swapi.dev/api/people/?search=${searchQuery}&format=json`;

    const resp: Response = await fetch(url);

    if (resp.status !== 200) {
      throw new Error('Request faild!');
    }

    const data: SearchResp = <SearchResp>await resp.json();

    return data;
  }
}

export const apiService = new ApiService();
