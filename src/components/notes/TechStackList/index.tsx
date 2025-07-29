import { getTechStack } from '@/lib/getTechStack';
import TechStackBadge from '@/components/shared/TechStackBadge';
import type { TechStack } from '@/lib/microcms';
import { useTechStack } from '@/app/context/TechStackContext';

type Props = {
  techStacks: TechStack[];
};

export default function TechStackList({ techStacks }: Props) {
  const { setSelected } = useTechStack();

  return (
    <ul className='flex flex-wrap gap-3 sm:flex-col'>
      <li
        className='border-gray flex w-fit cursor-pointer items-center rounded-md border px-2 py-1'
        onClick={() => setSelected('')}
      >
        ALL
      </li>
      {techStacks.map((apiStack) => {
        const localStack = getTechStack(apiStack.name);
        if (!localStack) return null;

        return (
          <li
            key={localStack.id}
            className='w-fit cursor-pointer'
            onClick={() => setSelected(localStack.id)}
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
