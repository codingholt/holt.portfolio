import CommandMenu from "./CommandMenu"
import Footer from "./Footer"

function Container({children, displayFooter} : {children: React.ReactNode, displayFooter: boolean}) {



    return(
        <>

        <div className="container mx-auto m-20 text-left">
            {children}
       
        </div>
       {displayFooter ? <Footer/> : null}
        </>
    )
}

export default Container