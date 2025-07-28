import WorkDetailPage from '@/app/[id]/page';
import { render, screen } from '@testing-library/react';
import { notFound } from 'next/navigation';
import { getWorkDetail } from '@/lib/microcms';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => {
    throw new Error('Not Found');
  }),
}));
jest.mock('@/lib/microcms', () => ({
  getWorkDetail: jest.fn(),
}));

it('renders content when work exists', async () => {
  (getWorkDetail as jest.Mock).mockResolvedValue({ content: '<p>Hello</p>' });
  render(await WorkDetailPage({ params: Promise.resolve({ id: '1' }) }));
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

it('calls notFound when no work', async () => {
  (getWorkDetail as jest.Mock).mockResolvedValue(null);
  await expect(WorkDetailPage({ params: Promise.resolve({ id: '1' }) })).rejects.toThrow(
    'Not Found'
  );
  expect(notFound).toHaveBeenCalled();
});
