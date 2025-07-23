import TopSectionTitle from '@/components/shared/TopSectionTitle';

export default function TopNotes() {
  return (
    <div>
      <section id='works' className='px-4 pb-16 sm:px-8 sm:pb-20'>
        <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
          <TopSectionTitle title='Note' subTitle="What I've learned" />
          <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8'>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
      </section>
    </div>
  );
}
