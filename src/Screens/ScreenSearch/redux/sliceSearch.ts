import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type BookType = {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: Array<string>;
  description: string;
  cover_image: string;
};

type homeStateType = {
  books: Array<BookType>;
  isLoading: boolean;
  error: string;
  showError: boolean;
};
const initialState: homeStateType = {
  books: [] as Array<BookType>,
  isLoading: false,
  error: '',
  showError: false,
};

const sliceSearch = createSlice({
  name: 'sliceSearch',
  initialState,
  reducers: {
    searchData(state, _action: PayloadAction<string>) {
      return {
        ...state,
        isLoading: true,
      };
    },
    searchedData(state, action: PayloadAction<BookType[]>) {
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    },
    errorSearchingData(state, action: PayloadAction<string>) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        showError: true,
      };
    },
  },
});

export const {searchData, searchedData, errorSearchingData} =
  sliceSearch.actions;
export const reducerSearch = sliceSearch.reducer;
export type SearchScreenActions =
  | ReturnType<typeof searchData>
  | ReturnType<typeof searchedData>
  | ReturnType<typeof errorSearchingData>;
