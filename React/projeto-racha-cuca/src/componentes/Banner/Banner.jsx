import {Link} from 'react-router-dom';


function Banner(){
    return(
        <header>
        <h1>Lista</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='sobre'>Sobre</Link></li>
                <li><Link to='servicos'>Serviços</Link></li>
                <li><Link to='contato'>Contato</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Banner