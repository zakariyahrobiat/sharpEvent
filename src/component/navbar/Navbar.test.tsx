
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import Navbar from './Navbar';


describe('Navbar', () => {
  const renderNavbar = () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  };

  test('renders logo text', () => {
    renderNavbar();
    const logoElement = screen.getByText(/SHARP EVENT/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders heading', () => {
    renderNavbar();
    const heading = screen.getByText(/List Your Space/i);
    
    expect(heading).toBeInTheDocument();
  });

  test('render buttons', () => {
    renderNavbar();
    const loginButton = screen.getByRole('button', { name: /Log in/i });
    const signupButton = screen.getByRole('button', {name:/Sign up/i})
    expect(loginButton).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });
});
