import JavaScript from "./assets/javascript.svg";
import Java from "./assets/java.svg";
import Python from "./assets/python.svg";
import HTML from "./assets/html5.svg";
import CSS from "./assets/css3.svg";
import react from "./assets/react.svg";
import Redux from "./assets/redux.svg";
import Boostrap from "./assets/bootstrap.svg";
import MaterialUi from "./assets/materialUi.svg";
import NodeJs from "./assets/nodejs.svg";
import Git from "./assets/Git.svg";
import Bash from "./assets/gitBash.svg";
import MySql from "./assets/mysql.svg";
import PostgresSql from "./assets/postgresql.svg";
import Sequelize from "./assets/sequelize.svg";
import Beerland from "./assets/beerland.png";
import Countries from "./assets/countries.png";
import Portafolio from "./assets/portafolio.png";
import Minerales from "./assets/minerales.png"
export const lenguajes = [
  { id: 1, name: "JavaScript", img: JavaScript, des: "" ,color:'#f3db4b'}, 
  { id: 2, name: "Java", img: Java, des: "",color:'#fc9b14' },
  { id: 3, name: "Python", img: Python, des: "",color:'#2472b3' },
];
export const frontEnd = [
  { id: 4, name: "HTML", img: HTML, des: "" ,color:'#e85326'},
  { id: 5, name: "CSS", img: CSS, des: "" ,color:'#1474b4'},
  { id: 6, name: "React", img: react, des: "",color:'#64dcfc' },
  { id: 7, name: "Redux", img: Redux, des: "",color:'#744cbc' },
  { id: 8, name: "Boostrap", img: Boostrap, des: "",color:'#7c54b4' },
  { id: 9, name: "MaterialUi", img: MaterialUi, des: "",color:'#04b3fb' },
];
export const backEnd = [
  { id: 10, name: "NodeJs", img: NodeJs, des: "",color:'#84cc2c ' },
  { id: 11, name: "Git", img: Git, des: "",color:'#f45434' },
  { id: 12, name: "Bash", img: Bash, des: "",color:'#1c1c1c ' },
  { id: 13, name: "MySql", img: MySql, des: "" ,color:'#e48c04'},
  { id: 14, name: "PostgresSql", img: PostgresSql, des: "",color:'#346494' },
  { id: 15, name: "Sequelize", img: Sequelize, des: "",color:'#2b446c' },
];

export const habilidades = lenguajes
    .concat(frontEnd)
    .concat(backEnd)
    .sort(() => Math.random() - 0.5);

export const proyectos = [
  {
    id: 1,
    titulo: "Beerland",
    img: Beerland,
    des: "Beerlanda es una página web de cervezas con detalles de marcas y países desarrollada con React, Node Js, PostgresSql, Sequalize, CSS, Boostrap, MaterialUI. Los usuarios buscan y filtran por Cereveria, precio, tipo de cerveza. El diseño es moderno y responsivo. Destaca la integración de API y tecnologías web modernas para crear aplicaciones web de alta calidad.",
    descripcion: {
      Objetivo:
        "La página web tiene como objetivo presentar una lista de cervezas de diferentes marcas y países, proporcionando detalles de cada una de ellas como su nombre, descripción, precio, y volumen alcohólico.",
      Tecnologías:
        elegir(["JavaScript","HTML","CSS","React","Redux","Boostrap","MaterialUi","NodeJs","Git","PostgresSql","Sequelize"]),

      Funcionalidades:
        " La página web cuenta con una sección de búsqueda que permite a los usuarios buscar cervezas por su nombre, y una sección de filtrado que permite a los usuarios seleccionar cervezas por su país de origen, amargor y ABV (Alcohol by Volume). Al hacer clic en una cerveza, se muestra una vista detallada con información adicional, incluyendo su imagen, descripción, precio y volumen alcohólico.",

      Diseño:
        " La página tiene un diseño moderno y atractivo, con una paleta de colores cálidos y una disposición ordenada y fácil de seguir. El uso de imágenes y el estilo tipográfico aportan al aspecto visual de la página.",

      Resultados:
        " El sitio web cumple con éxito su objetivo de presentar la información de las diferentes cervezas de manera clara y fácil de entender. La página es responsiva, adaptándose a diferentes tamaños de pantalla y dispositivos.",

      LeccionesAprendidas:
        "La integración de una API pública en el desarrollo web puede ofrecer una gran cantidad de información valiosa que puede ser utilizada para construir aplicaciones en línea útiles y atractivas. Además, este proyecto también demuestra el poder de las tecnologías web modernas en la creación de aplicaciones web de alta calidad.",
    },
  },
  {
    id: 2,
    titulo: "Countries",
    img: Countries,
    des: "Un sitio web desarrollado con tecnologías como React, nodeJs y CSS puro, que muestra información sobre países del mundo. Los usuarios pueden buscar países por nombre y filtrarlos por región. Al hacer clic en un país, se muestran detalles del pais, El diseño es minimalista y la información está organizada en secciones para facilitar la navegación. ",
    descripcion: {
      Objetivo:
        "El objetivo principal de la página web es mostrar información relevante acerca de los países del mundo. Los usuarios pueden buscar países por nombre, filtrarlos por región, y ver detalles de cada país como su bandera, capital, población, idioma y moneda oficial.",

      Tecnologías:
      elegir(["JavaScript","HTML","CSS","React","Redux","NodeJs","PostgresSql","Sequelize"]),

      Funcionalidades:
        "La página web cuenta con un buscador de países en la parte superior, que permite buscar países por nombre en tiempo real. También se pueden filtrar países por región utilizando una lista desplegable en la parte superior derecha de la página. Al hacer clic en un país, se muestra una vista detallada con información adicional, incluyendo una imagen de la bandera del país.",

      Diseño:
        "La página tiene un diseño sencillo y minimalista, con una paleta de colores neutros y elementos visuales que destacan la información relevante de cada país. La información está organizada en secciones claramente definidas para una fácil navegación.",

      Resultados:
        "El sitio web es efectivo en su objetivo de presentar información de los países de manera ordenada y fácil de entender. El sitio también es responsivo, adaptándose a diferentes tamaños de pantalla y dispositivos.",

      LeccionesAprendidas:
        "Aunque se trata de una página sencilla, su diseño y funcionalidades demuestran la utilidad de las tecnologías web modernas en el desarrollo de aplicaciones en línea.",
    },
  },
  {
    id: 3,
    titulo: "Portafolio",
    img: Portafolio,
    des: "Un sitio web desarrollado con tecnologías como React, CSS, Boostrap, Javascript, Aquí podrás encontrar una selección de mis trabajos más destacados y logros profesionales. Esta página web ha sido diseñada para presentar de manera clara y organizada mi experiencia y habilidades. ",
    descripcion: {
      Objetivo:
    "El objetivo principal de mi portafolio en línea es mostrar una selección de mis trabajos y habilidades más destacados de manera clara y organizada. La página web ha sido diseñada para presentar mi experiencia y habilidades utilizando tecnologías modernas.",
  Tecnologías: elegir(["JavaScript","React","CSS","Boostrap"]),
  Funcionalidades:
    "La página web de mi portafolio cuenta con una sección de proyectos que muestra una colección de mis trabajos más relevantes. Cada proyecto cuenta con una breve descripción, imágenes y detalles sobre mi rol en el mismo. Además, también he incluido testimonios de clientes y colaboradores para dar una idea de cómo es trabajar conmigo.",
  Diseño:
    "La página web de mi portafolio tiene un diseño atractivo y organizado que resalta la información relevante de cada proyecto. El diseño utiliza una paleta de colores atractiva y elementos visuales que ayudan a guiar la navegación del usuario.",
  Resultados:
    "El sitio web de mi portafolio ha sido efectivo en su objetivo de presentar mi experiencia y habilidades de manera clara y organizada. El sitio también es responsivo, adaptándose a diferentes tamaños de pantalla y dispositivos.",
  LeccionesAprendidas:
    "La creación de mi portafolio me ha permitido aprender y mejorar mis habilidades en el desarrollo web utilizando tecnologías modernas como JavaScript, React, CSS y Boostrap."
},
  },{
    id: 4,
    titulo: "Minerales de colombia S.A.S",
    img: Minerales,
    des: "Minerales Colombia S.A.S. con HTML y CSS, presentando la empresa y sus servicios de manera clara y accesible. El diseño es profesional, jerarquizado y responsivo. El proyecto me permitió mejorar mis habilidades en desarrollo web y demostrar mi capacidad para crear sitios efectivos y atractivos.",
    descripcion: {
      Objetivo:
      "El objetivo principal de la página web de Minerales Colombia S.A.S. es presentar la empresa y sus servicios de manera clara y accesible para clientes y visitantes. La página web ha sido diseñada para informar sobre la empresa, sus servicios, y los minerales que produce.",
    Tecnologías: ["HTML", "CSS"],
    Funcionalidades:
      "La página web cuenta con una página de inicio que presenta la empresa y sus servicios de manera resumida. Además, hay secciones dedicadas a describir en detalle los servicios ofrecidos por la empresa y los tipos de minerales que produce. La navegación es sencilla y fácil de usar, y hay un formulario de contacto que permite a los visitantes comunicarse directamente con la empresa.",
    Diseño:
      "La página web utiliza una combinación de colores atractiva y elementos visuales que destacan la información relevante de cada sección. El diseño es limpio y profesional, con una jerarquía clara que guía al visitante a través de la información presentada.",
    Resultados:
      "La página web de Minerales Colombia S.A.S. es efectiva en su objetivo de presentar la empresa y sus servicios de manera clara y accesible. El sitio también es responsivo, adaptándose a diferentes tamaños de pantalla y dispositivos, lo que lo hace fácilmente accesible para una audiencia más amplia.",
    LeccionesAprendidas:
      "La creación de la página web de Minerales Colombia S.A.S. ha permitido aprender y mejorar habilidades en el desarrollo web utilizando tecnologías como HTML y CSS para crear sitios web eficaces y atractivos."
  },
  }
  
];


function elegir(tecnologia){
  var nuevo =tecnologia.map(tec=>habilidades.find(e=>e.name===tec))
  return nuevo.map(n=>{return {name:n.name,color:n.color}})
  
}
