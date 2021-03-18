import React from "react";
import {Provider} from "react-redux";
import promise from 'redux-promise';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import App from "./App";

const configureMockStore = configureStore([promise]);

const initialState = {
  cards: [],
  blocks: [
    {
      "id": 1,
      "title": "For communicate",
      "description": "",
      "language": "en"
    }
  ],
  profiles: [],
  language: "en",
  localisation: []
};

const store = configureMockStore(initialState);

it('should contain "For communicate"', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = getByText(/For communicate/i);

  expect(linkElement).toBeInTheDocument();
});