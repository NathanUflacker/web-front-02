import PersonalInfo from '../Componentes/PersonalInfo';
import Skills from '../Componentes/Skills';
import ContactForm from '../Componentes/ContactForm'

function Home() {
  const baseUsuarios = [
    {nome: 'Caio', email: 'Caio@caio.com', telefone: '9999'},
    {nome: 'Nathan', email:'nathan@gmail.com', telefone: '7777'}]

  return (
    <div className="mainInfo">
      <section id='info'>
          <PersonalInfo
          usuarios={baseUsuarios}
          // nome='Caio'
          // email='fulano@hotmail.com'
          // phone='(11) 4002-8922'
          />

          <Skills 
          titulo1='HTML'
          nivel1='Avançado'

          titulo2='CSS'
          nivel2='intermediário'

          titulo3='JavaScript'
          nivel3='básico'/>
        </section>
        <ContactForm 
        title='Entre em Contato'/>
    </div>
  );
}

export default Home;