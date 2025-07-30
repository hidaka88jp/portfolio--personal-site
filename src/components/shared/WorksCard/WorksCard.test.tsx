import { render, screen } from '@testing-library/react';
import WorksCard from '@/components/shared/WorksCard';
import '@testing-library/jest-dom';

const mockProps = {
  id: '1',
  title: 'My Test Project',
  category: 'Portfolio',
  thumbnail: {
    url: 'https://example.com/image.png',
    width: 800,
    height: 600,
  },
  techStacks: [
    { id: 'nextjs', name: 'Next.js' },
    { id: 'tailwindcss', name: 'Tailwind CSS' },
  ],
};

describe('WorksCard', () => {
  it('renders title, category, and tech stack badges', () => {
    render(<WorksCard {...mockProps} />);

    expect(screen.getByText('Portfolio')).toBeInTheDocument();

    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  it('renders thumbnail image with correct alt text', () => {
    render(<WorksCard {...mockProps} />);

    const image = screen.getByAltText('My Test Project thumbnail');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('example.com/image.png'));
  });
});
