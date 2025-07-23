// tests/microcms.test.ts
import { getWorksList, getNotesList } from '@/lib/microcms';

jest.mock('@/lib/microcms', () => ({
  getWorksList: jest.fn(),
  getNotesList: jest.fn(),
}));

describe('getWorksList', () => {
  it('fetches works list from microCMS', async () => {
    const mockResponse = {
      contents: [
        {
          id: '1',
          title: 'My Test Work',
          category: 'Portfolio',
          techStack: ['Next.js'],
          content: '<p>Test content</p>',
          thumbnail: { url: 'https://example.com/img.png', width: 800, height: 600 },
        },
      ],
      totalCount: 1,
      offset: 0,
      limit: 10,
    };

    (getWorksList as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getWorksList();

    expect(result.contents).toHaveLength(1);
    expect(result.contents[0].title).toBe('My Test Work');
  });
});

describe('getNotesList', () => {
  it('fetches notes list from microCMS', async () => {
    const mockResponse = {
      contents: [
        {
          id: 'n1',
          title: 'My Test Note',
          techStack: ['Next.js'],
          content: '<p>Note content</p>',
          thumbnail: { url: 'https://example.com/note.png', width: 800, height: 600 },
        },
      ],
      totalCount: 1,
      offset: 0,
      limit: 10,
    };

    (getNotesList as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getNotesList();

    expect(result.contents).toHaveLength(1);
    expect(result.contents[0].title).toBe('My Test Note');
  });
});
