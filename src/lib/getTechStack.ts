import { TECH_STACKS, TechStack } from '@/constants/techStacks';

export function getTechStack(name: string): TechStack | undefined {
  return TECH_STACKS.find((stack) => stack.name === name);
}
