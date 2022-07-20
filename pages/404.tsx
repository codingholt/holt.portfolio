import Link from 'next/link'
import Container from '../components/Container'



const notFound = () => {
  return (
<>
    <Container displayFooter={false}>

      <h1 className='text-xl font-semibold'>404 - Page not found.</h1>
      <p className='text-secondary'>
        Maybe you misspelled the link. Maybe something existed here, or it
        didn&apos;t exist in the first place...
      </p>
      <Link href='/'>
        <p>
        <a className='inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 mt-4 px-4 border border-gray-400 rounded shadow hover:cursor-pointer'>Home</a>
        </p>
      </Link>
      </Container>
</>
  )
}

export default notFound