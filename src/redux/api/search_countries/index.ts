import opencage from 'opencage-api-client';
import { CountriesResponse } from './interfaces';

export const loadNamesApi = async (query) => {
  const key = '225588ddf23a423f978c5e5bf3bc5357';
  const data: CountriesResponse = await opencage.geocode({
    key: key,
    q: query,
  });

  return data.results;
};
