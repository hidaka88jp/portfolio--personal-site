import { getTechStack } from '@/lib/getTechStack';
import clsx from 'clsx';

type TechStackProps = {
  techStacks: { id: string; name: string }[];
  className?: string;
};

export default function TechStackLabel({ techStacks, className }: TechStackProps) {
  return (
    <div className={clsx('flex flex-wrap items-center gap-1 py-2 pr-1', className)}>
      {techStacks.map((techStack) => {
        const stack = getTechStack(techStack.id);
        return (
          <div
            key={techStack.id}
            className='w-fit rounded-md px-2 py-0.5 text-sm text-white'
            style={{ backgroundColor: stack?.color ?? '#666' }}
          >
            <p>{techStack.name}</p>
          </div>
        );
      })}
    </div>
  );
}
