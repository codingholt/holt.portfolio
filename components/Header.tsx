import { useState } from 'react'
  import {
    GitHubLogoIcon,
    TwitterLogoIcon,
    EnvelopeClosedIcon
  } from '@radix-ui/react-icons'
import Modal from './Modal'


function Header({}:{}){
  const IconStyle = 'opacity-50 hover:opacity-100 mx-2 hover:cursor-pointer transform transition duration-500 hover:scale-105'
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

function openModal() {
    setIsOpen(true)
  }

    return (<>
<div className='fixed inset-x-0 top-0 z-10 p-4 pt-[2vh] overflow-y-auto px-4'>
    <nav className="sticky
    z-10 
    backdrop-filter backdrop-blur-lg bg-opacity-5
    bg-slate-200 mx-40
    rounded-md shadow-lg dark:shadow-gray-900
    ring-1 ring-black/10 dark:ring-gray-700/50
    flex flex-col">
      <div className='inline-flex m-2 justify-end'>
      <span>
        <TwitterLogoIcon width={30} height={30} className={IconStyle} onClick={() => window.open('https://twitter.com/traderholt', '_blank')}/>
      </span>
      <span>
        <GitHubLogoIcon width={30} height={30} className={IconStyle} onClick={() => window.open('https://github.com/codingholt', '_blank')}/>
      </span>
      <span>
        <EnvelopeClosedIcon width={30} height={30} className={IconStyle} onClick={openModal}/>
      </span>
      </div>
</nav>


</div>
<Modal modalTitle='Email' modalDescription='You can email me at: codingholt@gmx.com or click the button below to go straight to your preffered email application.' modalOpen={isOpen} closeModal={closeModal}/>
</>
    )
}


export default Header