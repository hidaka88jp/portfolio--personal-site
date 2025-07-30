// tests/getTechStack.test.ts
import { getTechStack } from '@/lib/getTechStack';

describe('getTechStack', () => {
  it('returns correct tech stack object for known name', () => {
    const result = getTechStack('nextjs');
    expect(result?.id).toBe('nextjs');
    expect(result?.color).toBe('#383434');
  });

  it('returns undefined for unknown name', () => {
    const result = getTechStack('UnknownTech');
    expect(result).toBeUndefined();
  });
});
