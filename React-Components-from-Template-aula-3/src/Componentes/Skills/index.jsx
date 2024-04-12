function Skills(props) {
  return (
    <div className="skills">
       <h2>Habilidades</h2>
                <div class="skill-card">
                    <h3>{props.titulo1}</h3>
                    <p>Nível: {props.nivel1}</p>
                </div>
                <div class="skill-card">
                    <h3>{props.titulo2}</h3>
                    <p>Nível: {props.nivel2}</p>
                </div>
                <div class="skill-card">
                    <h3>{props.titulo3}</h3>
                    <p>Nível: {props.nivel3}</p>
                </div>
          </div>
  );
}

export default Skills;