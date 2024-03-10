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
  HomeScreenActions,
  errorFetchingData,
  fetchData,
  fetchedData,
} from './sliceHome';
import axios from 'axios';

async function getBookData(): Promise<BookType[]> {
  const result = await axios.get<BookType[]>(
    'https://freetestapi.com/api/v1/books',
  );
  return result.data;
}

export const epicHome = (action$: Observable<HomeScreenActions>) =>
  action$.pipe(
    filter(fetchData.match),
    debounceTime(500),
    mergeMap(() =>
      from(getBookData()).pipe(
        map(data => fetchedData(data)),
        catchError(() => of(errorFetchingData('Error Fetching Books'))),
        takeUntil(action$.pipe(filter(fetchData.match))),
      ),
    ),
  );
