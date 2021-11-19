import ReadMoreButton from '@/components/buttons/ReadMore'

export default function News(){
  return(
    <section className='bg-gray-100 h-screen w-full'>
      <h2 className='text-7xl w-full text-center pt-24 pb-10'>News</h2>
      <ol>
        <li>2021.12.31 ホームページをリニューアルしました</li>
        <li>2021.12.31 ホームページをリニューアルしました</li>
        <li>2021.12.31 ホームページをリニューアルしました</li>
      </ol>
      <div className='mt-24'>
          <ReadMoreButton href="/about" />
        </div>
    </section>
  );
}