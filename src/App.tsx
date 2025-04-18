import Header from "./Componentes/Header"
import MainDiv from "./Componentes/MainDiv"

export default function ADFpage() { {/* ADF: A Dev's Feed */}
    return (
        <>
            <Header />
            <MainDiv />
            <Header /> {/* Not actually a header, but a reutilization of the Header component as a footer */}
        </>
    )
}