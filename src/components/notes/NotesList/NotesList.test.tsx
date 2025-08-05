// tests/components/NotesList.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotesList from '@/components/notes/NotesList';
import { TechStackProvider } from '@/context/TechStackContext';

// mock router and search params
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({
    get: (key: string) => {
      if (key === 'techStack') return 'nextjs';
      if (key === 'page') return '1';
      return null;
    },
  }),
}));

// mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        contents: [
          {
            id: '1',
            title: 'Test Note',
            thumbnail: { url: 'https://example.com/test.png', width: 800, height: 600 },
            techStack: [{ id: 'nextjs', name: 'Next.js', Icon: undefined, color: '#000' }],
          },
        ],
        totalCount: 20,
        offset: 0,
        limit: 10,
      }),
  })
) as jest.Mock;

describe('NotesList', () => {
  it('renders category name and page number', async () => {
    render(
      <TechStackProvider>
        <NotesList />
      </TechStackProvider>
    );

    // check if tech stack name is rendered
    expect(await screen.findByText(/Next\.js/i)).toBeInTheDocument();

    // check if page number is rendered
    expect(await screen.findByText('1 / 2')).toBeInTheDocument();
  });
});
