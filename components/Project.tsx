import Image from 'next/image'
import Parallax from './Parallax'


function Project({ProjectTitle, ProjectImg, ProjectLink, ProjectDescription, ProjectId}:{ProjectImg: any, ProjectId: number, ProjectTitle: string, ProjectLink: string, ProjectDescription: string}) {
  return (

    <Parallax key={ProjectId}>
    <div className="wrapper bg-gray-400 antialiased text-gray-900">
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
    </Parallax>
  )
}
export default Project;