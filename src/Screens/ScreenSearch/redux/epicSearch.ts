import {
  Observable,
  catchError,
  debounceTime,
  filter,
  from,
  map,
  mergeMap,
  of,
  takeUntil,
} from 'rxjs';
import {
  BookType,
  SearchScreenActions,
  errorSearchingData,
  searchData,
  searchedData,
} from './sliceSearch';
import axios from 'axios';
import debugLog from '../../../Utils/Logger';

async function searchBooks(searchString: string) {
  debugLog('Working...');
  const result = await axios.get<BookType[]>(
    `https://freetestapi.com/api/v1/books?search=${encodeURIComponent(
      searchString,
    )}`,
  );
  return result.data;
}

export const epicSearch = (action$: Observable<SearchScreenActions>) =>
  action$.pipe(
    filter(searchData.match),
    debounceTime(200),
    map(data => data.payload),
    mergeMap(data =>
      from(searchBooks(data)).pipe(
        map(books => searchedData(books)),
        takeUntil(action$.pipe(filter(searchData.match))),
        catchError(() => of(errorSearchingData('Error Searching Data'))),
      ),
    ),
  );
