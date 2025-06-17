jest.mock('@/lib/themeColor', () => ({
  setThemeColor: jest.fn(),
}));

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileNavigation from './index';
import { setThemeColor } from '@/lib/themeColor';

describe('MobileNavigation', () => {
  it('renders with provided className', () => {
    render(<MobileNavigation className='test-class' />);
    const root = screen.getByRole('navigation').parentElement;
    expect(root).toHaveClass('test-class');
  });

  it('initially menu is closed', () => {
    render(<MobileNavigation className='' />);
    const nav = screen.getByRole('navigation');
    expect(nav.className).toMatch(/translate-x-full/);
  });

  it('opens menu when menu-icon is clicked', async () => {
    const user = userEvent.setup();
    render(<MobileNavigation className='' />);
    const button = screen.getByLabelText('Open menu');
    await user.click(button);
    const nav = screen.getByRole('navigation');
    expect(nav.className).toMatch(/translate-x-0/);
  });

  it('closes menu when overlay is clicked', async () => {
    const user = userEvent.setup();
    render(<MobileNavigation className='' />);
    await user.click(screen.getByLabelText('Open menu')); // click button to open menu
    const overlay = screen.getByTestId('overlay');
    await user.click(overlay); // click overlay to close
    const nav = screen.getByRole('navigation');
    expect(nav.className).toMatch(/translate-x-full/);
  });

  it('contains expected nav links and social links', async () => {
    const user = userEvent.setup();
    render(<MobileNavigation className='' />);
    await user.click(screen.getByLabelText('Open menu'));

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Works')).toBeInTheDocument();
    expect(screen.getByText('Notes')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter / X')).toBeInTheDocument();
  });

  it('calls setThemeColor on open and close', async () => {
    const user = userEvent.setup();
    render(<MobileNavigation className='' />);

    await user.click(screen.getByLabelText('Open menu'));
    expect(setThemeColor).toHaveBeenCalledWith('#434343');

    await user.click(screen.getByTestId('overlay'));
    expect(setThemeColor).toHaveBeenCalledWith('#ffffff');
  });
});
