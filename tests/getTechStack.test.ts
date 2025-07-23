// tests/getTechStack.test.ts
import { getTechStack } from '@/lib/getTechStack';

describe('getTechStack', () => {
  it('returns correct tech stack object for known name', () => {
    const result = getTechStack('Next.js');
    expect(result?.name).toBe('Next.js');
    expect(result?.color).toBe('#383434');
  });

  it('returns undefined for unknown name', () => {
    const result = getTechStack('UnknownTech');
    expect(result).toBeUndefined();
  });
});
