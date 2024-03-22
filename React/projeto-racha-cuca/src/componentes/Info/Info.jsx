import Habilidades from "../Habilidades/Habilidades";
import InfoPessoais from "../InfoPessoais/InfoPessoais";

function Info(){
    return(
        <section id="info">
            <InfoPessoais/>
            <Habilidades/>
        </section>
    )
}

export default Info