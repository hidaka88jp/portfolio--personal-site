import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import Header from './index';

// Header.test.tsx
describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders navigation items in both mobile and desktop versions', () => {
    render(<Header />);

    // Check Mobile Navigation
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(within(mobileNav).getByText('About')).toBeInTheDocument();
    expect(within(mobileNav).getByText('Works')).toBeInTheDocument();
    expect(within(mobileNav).getByText('Notes')).toBeInTheDocument();
    expect(within(mobileNav).getByText('LinkedIn')).toBeInTheDocument();
    expect(within(mobileNav).getByText('Twitter / X')).toBeInTheDocument();

    // Check Desktop Navigation
    const desktopNav = screen.getByTestId('desktop-nav');
    expect(within(desktopNav).getByText('About')).toBeInTheDocument();
    expect(within(desktopNav).getByText('Works')).toBeInTheDocument();
    expect(within(desktopNav).getByText('Notes')).toBeInTheDocument();
    expect(within(desktopNav).getByText('LinkedIn')).toBeInTheDocument();
    expect(within(desktopNav).getByText('Twitter / X')).toBeInTheDocument();
  });

  it('renders both navigation components with proper visibility classes', () => {
    render(<Header />);
    // MobileNavigation
    const mobileNav = screen.getByLabelText('Open menu').closest('div');
    expect(mobileNav).toHaveClass('sm:hidden');

    // DesktopNavigation
    const desktopNav = screen.getByTestId('desktop-nav');
    expect(desktopNav).toHaveClass('hidden');
    expect(desktopNav).toHaveClass('sm:flex');
  });
});
