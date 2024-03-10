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

const sliceHome = createSlice({
  name: 'sliceHome',
  initialState,
  reducers: {
    fetchData(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchedData(state, action: PayloadAction<BookType[]>) {
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    },
    errorFetchingData(state, action: PayloadAction<string>) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        showError: true,
      };
    },
  },
});

export const {fetchData, fetchedData, errorFetchingData} = sliceHome.actions;
export const reducerHome = sliceHome.reducer;
export type HomeScreenActions =
  | ReturnType<typeof fetchData>
  | ReturnType<typeof errorFetchingData>
  | ReturnType<typeof fetchedData>;
