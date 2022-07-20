import CommandMenu from "./CommandMenu"
import Footer from "./Footer"

function Container({children } : {children: React.ReactNode}) {

    return(
        <>

        <div className="container mx-auto m-20 text-left">
            {children}
       
        </div>
        <Footer/>
        </>
    )
}

export default Container