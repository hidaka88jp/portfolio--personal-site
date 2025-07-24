import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 TAKANORI HIDAKA/i)).toBeInTheDocument();
  });

  it('renders Back to Top button', () => {
    render(<Footer />);
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument();
  });

  it('calls window.scrollTo on button click', async () => {
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    render(<Footer />);
    const button = screen.getByRole('button', { name: /back to top/i });
    await userEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
