// tests/microcms.test.ts
import { getWorksList, getNotesList, getWorkDetail, getTechStacks } from '@/lib/microcms';

jest.mock('@/lib/microcms', () => ({
  getWorksList: jest.fn(),
  getNotesList: jest.fn(),
  getWorkDetail: jest.fn(),
  getTechStacks: jest.fn(),
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

describe('getWorkDetail', () => {
  it('fetches work detail from microCMS', async () => {
    const mockWork = {
      id: '1',
      title: 'Test Work',
      category: 'Portfolio',
      techStack: ['Next.js'],
      content: '<p>Detail content</p>',
      thumbnail: { url: 'https://example.com/img.png', width: 800, height: 600 },
    };
    (getWorkDetail as jest.Mock).mockResolvedValueOnce(mockWork);

    const result = await getWorkDetail('1');

    expect(result?.title).toBe('Test Work');
  });

  it('returns null when fetching fails', async () => {
    (getWorkDetail as jest.Mock).mockResolvedValueOnce(null);

    const result = await getWorkDetail('invalid-id');

    expect(result).toBeNull();
  });
});

describe('getTechStacks', () => {
  it('fetches tech stacks from microCMS', async () => {
    const mockStacks = {
      contents: [
        { id: 'nextjs', name: 'Next.js' },
        { id: 'tailwindcss', name: 'Tailwind CSS' },
      ],
      totalCount: 2,
      offset: 0,
      limit: 100,
    };
    (getTechStacks as jest.Mock).mockResolvedValueOnce(mockStacks);

    const result = await getTechStacks();

    expect(result.contents).toHaveLength(2);
    expect(result.contents[0].name).toBe('Next.js');
  });
});
