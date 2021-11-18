import { useRouter } from 'next/router'

function ReadMore({ href }: {href: string}) {
  const router = useRouter()

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className='w-full flex justify-center'>
      <a href={href} onClick={handleClick}>
        {/* ボタンの色を変更しなければならない */}
        <button className='text-white text-center bg-green-500 hover:bg-green-700 p-4 text-2xl rounded-3xl'>
          Read more
        </button>
      </a>
    </div>
  )
}

export default ReadMore