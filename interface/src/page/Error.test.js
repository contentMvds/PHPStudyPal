import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import ErrorPage from '.';

describe('ErrorPage', () => {
  it('should render the error page content', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    // Assert the elements and content in the error page
    const heading = screen.getByText('404');
    const errorMessage = screen.getByText(/Opps!/);
    const link = screen.getByText('Go Home');

    expect(heading).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('should have a link to the home page', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    // Assert that the link has the correct URL
    const link = screen.getByText('Go Home');
    expect(link.getAttribute('href')).toBe('/login');
  });
});
