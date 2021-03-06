import CommandMenu from "./CommandMenu"
import Footer from "./Footer"
import Header from "./Header"
import Modal from "./Modal"
function Container({children, displayFooter} : {children: React.ReactNode, displayFooter: boolean}) {


    return(
        <>
<Header/>

    <div className="
    backdrop-filter backdrop-blur-lg bg-opacity-5
    bg-slate-200 mx-40
    rounded-md shadow-2xl dark:shadow-gray-900
    ring-1 ring-black/10 dark:ring-gray-700/50">

    
        <div className="container mx-auto m-20 text-left p-20">

            {children}
       
        </div>
        </div>
       {displayFooter ? <Footer/> : null}
        </>
    )
}

export default Container