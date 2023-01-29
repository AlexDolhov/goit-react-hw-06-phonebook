// import { configureStore } from '@reduxjs/toolkit';
// import { numbersReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     numbers: numbersReducer,
//     filter: filterReducer,
//   },
// });

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
