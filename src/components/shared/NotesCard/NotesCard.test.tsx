import { render, screen } from '@testing-library/react';
import NotesCard from '@/components/shared/NotesCard';
import '@testing-library/jest-dom';

const mockProps = {
  title: 'Learning GitHub Actions',
  thumbnail: {
    url: 'https://example.com/note-image.png',
    width: 800,
    height: 600,
  },
  techStacks: [
    { id: 'nextjs', name: 'Next.js' },
    { id: 'tailwindcss', name: 'Tailwind CSS' },
  ],
};

describe('NotesCard', () => {
  it('renders title and tech stack badges', () => {
    render(<NotesCard {...mockProps} />);

    // Title
    expect(screen.getByText('Learning GitHub Actions')).toBeInTheDocument();

    // Tech Stack Badges
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  it('renders thumbnail image with correct alt text', () => {
    render(<NotesCard {...mockProps} />);

    const image = screen.getByAltText('Learning GitHub Actions thumbnail');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('example.com/note-image.png'));
  });
});
