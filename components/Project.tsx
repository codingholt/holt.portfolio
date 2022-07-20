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


<div onClick={() => window.open(ProjectLink, '_blank')} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:opacity-80 transform transition duration-500 hover:scale-105 hover:cursor-pointer">
    
        <Image className="rounded-t-lg max-w-xs" 
                src={ProjectImg} 
                objectFit='cover'
                layout='intrinsic'
                width={1000}
                height={500}
                alt={ProjectTitle}
              />    

    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ProjectTitle}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ProjectDescription}</p>

    </div>
</div>

</Parallax>
  )
}
export default Project;