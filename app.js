const project = document.getElementById("project");

project.addEventListener("click", () => {
    const displayProyect = document.getElementById("displayproject")
    displayProyect.scrollIntoView();
});

const skills = document.getElementById("skills");

skills.addEventListener("click", () => {
    const displaySkills = document.getElementById("displayskills")
    displaySkills.scrollIntoView();
});

const aboutme = document.getElementById("aboutme");

aboutme.addEventListener("click", () => {
    const displayAboutme = document.getElementById("displayaboutme")
    displayAboutme.scrollIntoView();
});


//Ingles

const ing = document.getElementById("ing");

ing.addEventListener("click", () => {
    homeIng();
    projectIng();
    skillsIng();
    aboutmeIng();
    welcomeIng();
    projectTitle("ROJECTS");
    skillsTitle();
    softskills();
    about();
    aboutInfo();
});


const homeIng = () => {
    const home = document.getElementById("home")
    home.innerHTML= `Home`
};

const projectIng = () => {
    project.innerHTML= `Projects`
};

const skillsIng = () => {
    skills.innerHTML=`Skills`
};

const aboutmeIng = () => {
    aboutme.innerHTML=`About Me`
};

const welcomeIng = () => {
    const welcome = document.getElementById("welcome")
    welcome.innerHTML= `¡Welcome!`
};

const projectTitle = (rojects) => {
    const displayIng = document.getElementById("displayproject");
    const p = displayIng.querySelector("span").outerHTML;
    displayIng.innerHTML = `${p}${rojects}`
};

const skillsTitle = () => {
    const displayIng = document.getElementById("displayskills");
    const h = document.getElementById("h");
    displayIng.textContent = "KILLS"
    h.textContent = "S"
    displayIng.insertAdjacentHTML("afterbegin", h.outerHTML)
};

const softskills = () => {
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const n3 = document.getElementById("n3");
    const n4 = document.getElementById("n4");
    const n5 = document.getElementById("n5");
    n1.innerHTML = `Perseverance`;
    n2.innerHTML = `Enthusiasm`;
    n3.innerHTML = `Fellowship`;
    n4.innerHTML = `Dedication`;
    n5.innerHTML = `Commitment`
};

const about = () => {
    const displayIng = document.getElementById("displayaboutme");
    const s = document.getElementById("s");
    displayIng.textContent = "BOUT ME"
    s.textContent = "A"
    displayIng.insertAdjacentHTML("afterbegin", s.outerHTML)
};

const aboutInfo = () => {
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    a1.innerHTML = `I am passionate about and I am in constant search and learning of new technologies, carrying out personal projects that increase my knowledge in the area.`;
    a2.innerHTML = `I am looking for my first work experience in the field of programming web pages.`;
};


//Español

const esp = document.getElementById("esp");

esp.addEventListener("click", () => {
    inicio();
    projecto();
    habilidad();
    skillsEsp();
    aboutEsp();
});

const inicio = () => {
    const inicio = document.getElementById("home");
    const proyecto = document.getElementById("project");
    const habilidad = document.getElementById("skills");
    const sobre = document.getElementById("aboutme");
    const titulo = document.getElementById("welcome")
    inicio.innerHTML = `Inicio`;
    proyecto.innerHTML = `Proyectos`;
    habilidad.innerHTML = `Habilidades`;
    sobre.innerHTML = `Sobre Mi`;
    titulo.innerHTML = `¡Bienvenidos!`
};

const projecto = () => {
    const displayIng = document.getElementById("displayproject");
    const p = document.getElementById("p");
    displayIng.textContent = "ROYECTOS"
    p.textContent = "P"
    displayIng.insertAdjacentHTML("afterbegin", p.outerHTML)
};

const habilidad = () => {
    const displayIng = document.getElementById("displayskills");
    const h = document.getElementById("h");
    displayIng.textContent = "ABILIDADES"
    h.textContent = "H"
    displayIng.insertAdjacentHTML("afterbegin", h.outerHTML)
};

const skillsEsp = () => {
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const n3 = document.getElementById("n3");
    const n4 = document.getElementById("n4");
    const n5 = document.getElementById("n5");
    n1.innerHTML = `Perseverancia`;
    n2.innerHTML = `Entusiasmo`;
    n3.innerHTML = `Compañerismo`;
    n4.innerHTML = `Dedicacion`;
    n5.innerHTML = `Compromiso`
};

const aboutEsp = () => {
    const displayIng = document.getElementById("displayaboutme");
    const s = document.getElementById("s");
    displayIng.textContent = "OBRE MI"
    s.textContent = "S"
    displayIng.insertAdjacentHTML("afterbegin", s.outerHTML)
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    a1.innerHTML = `Me apasiona y estoy en constante búsqueda y aprendizaje de nuevas tecnologías, realizando proyectos personales que aumenten mis conocimientos en el área.`;
    a2.innerHTML = `Me encuentro en la búsqueda de mi primera experiencia laboral en el campo de la programación de páginas web.`;
};