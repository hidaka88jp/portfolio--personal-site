'use client';

import { getTechStack } from '@/lib/getTechStack';
import TechStackBadge from '@/components/shared/TechStackBadge';
import type { TechStack } from '@/lib/microcms';
import { useTechStack } from '@/context/TechStackContext';
import { useRouter } from 'next/navigation';

type Props = {
  techStacks: TechStack[];
};

export default function TechStackList({ techStacks }: Props) {
  const { setSelected } = useTechStack();
  const router = useRouter();

  function handleCategoryChange(newCategory: string) {
    router.push(`/notes?techStack=${newCategory}&page=1`);
    setSelected(newCategory);
  }

  return (
    <ul className='flex flex-wrap gap-3 sm:flex-col'>
      <li
        className='border-gray flex w-fit cursor-pointer items-center rounded-md border px-2 py-1'
        onClick={() => handleCategoryChange('')}
      >
        ALL
      </li>
      {techStacks.map((apiStack) => {
        const localStack = getTechStack(apiStack.id);
        if (!localStack) return null;

        return (
          <li
            key={localStack.id}
            className='w-fit cursor-pointer'
            onClick={() => handleCategoryChange(localStack.id)}
          >
            <TechStackBadge
              name={localStack.name}
              Icon={localStack.Icon}
              color={localStack.color}
            />
          </li>
        );
      })}
    </ul>
  );
}
