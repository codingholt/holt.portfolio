import CommandMenu from "./CommandMenu"
import Footer from "./Footer"
import Header from "./Header"

function Container({children, displayFooter} : {children: React.ReactNode, displayFooter: boolean}) {



    return(
        <>
    <Header/>
        <div className="container mx-auto m-20 text-left">
        
            {children}
       
        </div>
       {displayFooter ? <Footer/> : null}
        </>
    )
}

export default Container