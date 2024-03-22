import FormContato from "../FormContato/FormContato";
import Habilidades from "../Habilidades/Habilidades";
import Info from "../Info/Info";
import InfoPessoais from "../InfoPessoais/InfoPessoais";

function ConteudoPrincipal(){
    return(
        <div class="mainInfo">
            <Info/>
            <FormContato/>
        </div>
    )
}

export default ConteudoPrincipal