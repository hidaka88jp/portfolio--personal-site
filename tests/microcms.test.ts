// tests/microcms.test.ts
import { getWorksList } from '@/lib/microcms';

jest.mock('@/lib/microcms', () => ({
  getWorksList: jest.fn(),
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
