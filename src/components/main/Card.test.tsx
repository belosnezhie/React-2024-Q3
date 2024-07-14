import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach, expect, test } from 'vitest';

import { testPeopleSearchResp } from '../../components/main/TestData';

import Card from './Card.tsx';

let unmount = () => {};

afterEach(() => {
  unmount();
});

test('Should render the relevant card data', () => {
  const renderObject = render(
    <BrowserRouter>
      <Card cardData={testPeopleSearchResp} pageData={1} searchData="" />
    </BrowserRouter>,
  );

  unmount = renderObject.unmount;

  const name = screen.getByText('Name: test');

  expect(name).toBeDefined();
});
