import Image from 'next/image'
import Parallax from './Parallax'


function Project({ProjectTitle, ProjectImg, ProjectLink, ProjectDescription, ProjectId}:{ProjectTitle: string, ProjectImg: any, ProjectLink: string, ProjectDescription: any, ProjectId: number}) {
  return (

    <Parallax key={ProjectId} className='p-10'>
    {/* <div className="wrapper bg-gray-400 antialiased text-gray-900">
    <div  onClick={() => window.open(ProjectLink, '_blank')}>
        
    </div>
           <Image src={ProjectImg} 
                objectFit='cover'
                layout='fill'
                alt={ProjectTitle}
              className="w-full object-cover object-center rounded-lg shadow-md"
              />    
        
     <div className="relative px-4 -mt-16  ">
       <div className="bg-white p-6 rounded-lg shadow-lg">

        
        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{ProjectTitle}</h4>
     
      <div className="mt-1">
      {ProjectDescription}
      </div>
      </div>
     </div>
      


    </div>
 */}


<div onClick={() => window.open(ProjectLink, '_blank')} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:opacity-80 transform transition duration-500 hover:scale-105">
    <a href={ProjectLink}>
        <Image className="rounded-t-lg max-w-xs" 
                src={ProjectImg} 
                objectFit='cover'
                layout='intrinsic'
                width={1000}
                height={500}
                alt={ProjectTitle}
              />    
    </a>
    <div className="p-5">
        <a href={ProjectLink}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ProjectTitle}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ProjectDescription}</p>
        {/* <a href={ProjectLink} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          P
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a> */}
    </div>
</div>

</Parallax>
  )
}
export default Project;