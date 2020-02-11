import { DefaultRootState } from 'react-redux';
import { AnimalsState } from './src/store/animal/types';

declare module 'react-redux/index' {
  interface DefaultRootState {
    animals: AnimalsState[];
  }
}
