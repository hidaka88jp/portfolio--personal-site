import { notFound } from 'next/navigation';
import { getWorkDetail } from '@/lib/microcms';
import LinkButton from '@/components/shared/LinkButton';

type WorkDetailPageProps = {
  params: Promise<{ id: string }>; // Promise to ensure params are awaited before use
};

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const work = await getWorkDetail(id);

  if (!work) return {};

  return {
    title: work.title,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params; // await the params to get the id
  const work = await getWorkDetail(id);

  if (!work) {
    notFound();
  }

  return (
    <article className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <div
          className='article mb-10 md:mb-14'
          dangerouslySetInnerHTML={{ __html: work.content }}
        />
        <div className='flex flex-col items-center justify-center'>
          <LinkButton href={'/#works'}>Back to Works</LinkButton>
        </div>
      </div>
    </article>
  );
}
