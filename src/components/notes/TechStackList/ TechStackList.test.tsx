import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TechStackList from '@/components/notes/TechStackList';
import { useTechStack } from '@/context/TechStackContext';

jest.mock('@/context/TechStackContext', () => ({
  useTechStack: jest.fn(),
}));

const mockSetSelected = jest.fn();

describe('TechStackList', () => {
  beforeEach(() => {
    (useTechStack as jest.Mock).mockReturnValue({ setSelected: mockSetSelected });
    mockSetSelected.mockClear(); // Clear mock before each test
  });

  it('renders ALL button and tech stack badges', () => {
    const mockStacks = [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'tailwindcss', name: 'Tailwind CSS' },
    ];
    render(<TechStackList techStacks={mockStacks} />);

    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  it('calls setSelected("") when ALL is clicked', async () => {
    render(<TechStackList techStacks={[]} />);
    await userEvent.click(screen.getByText('ALL'));
    expect(mockSetSelected).toHaveBeenCalledWith('');
  });

  it('calls setSelected with stack id when a badge is clicked', async () => {
    const mockStacks = [{ id: 'nextjs', name: 'Next.js' }];
    render(<TechStackList techStacks={mockStacks} />);
    await userEvent.click(screen.getByText('Next.js'));
    expect(mockSetSelected).toHaveBeenCalledWith('nextjs');
  });
});
