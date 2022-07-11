import Image from 'next/image'
import Parallax from './Parallax'


function Project({ProjectTitle, ProjectImg, ProjectLink, ProjectDescription,}:{ProjectImg: any, ProjectTitle: string, ProjectLink: string, ProjectDescription: string}) {
  return (
    <Parallax>
    <div className=" flex-col gap-4flex">
        
        <div className='h-72 w-full relative'>
           <Image src={ProjectImg} 
                objectFit='cover'
                layout='fill'
                className='rounded-t-md'
                alt={ProjectTitle}/>
            <div className="p-2 flex flex-col gap-1">
               
            <p className='text-2xl font-semibold' >{ProjectTitle}</p>
             <p className='text-secondary'>{ProjectDescription}</p>
            </div>
        </div>
    </div>
    </Parallax>
  )
}

export default Project;