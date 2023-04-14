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
      objetivo:
        "La página web tiene como objetivo presentar una lista de cervezas de diferentes marcas y países, proporcionando detalles de cada una de ellas como su nombre, descripción, precio, y volumen alcohólico.",
      tecnologias:
        elegir(["JavaScript","HTML","CSS","React","Redux","Boostrap","MaterialUi","NodeJs","Git","PostgresSql","Sequelize"]),

      funcionalidades:
        " La página web cuenta con una sección de búsqueda que permite a los usuarios buscar cervezas por su nombre, y una sección de filtrado que permite a los usuarios seleccionar cervezas por su país de origen, amargor y ABV (Alcohol by Volume). Al hacer clic en una cerveza, se muestra una vista detallada con información adicional, incluyendo su imagen, descripción, precio y volumen alcohólico.",

      diseño:
        " La página tiene un diseño moderno y atractivo, con una paleta de colores cálidos y una disposición ordenada y fácil de seguir. El uso de imágenes y el estilo tipográfico aportan al aspecto visual de la página.",

      resultados:
        " El sitio web cumple con éxito su objetivo de presentar la información de las diferentes cervezas de manera clara y fácil de entender. La página es responsiva, adaptándose a diferentes tamaños de pantalla y dispositivos.",

      leccionesAprendidas:
        "La integración de una API pública en el desarrollo web puede ofrecer una gran cantidad de información valiosa que puede ser utilizada para construir aplicaciones en línea útiles y atractivas. Además, este proyecto también demuestra el poder de las tecnologías web modernas en la creación de aplicaciones web de alta calidad.",
    },
    url:'https://beerlanda.vercel.app/',
  },
  {
    id: 2,
    titulo: "Countries",
    img: Countries,
    des: "Un sitio web desarrollado con tecnologías como React, nodeJs y CSS puro, que muestra información sobre países del mundo. Los usuarios pueden buscar países por nombre y filtrarlos por región. Al hacer clic en un país, se muestran detalles del pais, El diseño es minimalista y la información está organizada en secciones para facilitar la navegación. ",
    descripcion: {
      objetivo:
        "El objetivo principal de la página web es mostrar información relevante acerca de los países del mundo. Los usuarios pueden buscar países por nombre, filtrarlos por región, y ver detalles de cada país como su bandera, capital, población, idioma y moneda oficial.",

      tecnologias:
      elegir(["JavaScript","HTML","CSS","React","Redux","NodeJs","PostgresSql","Sequelize"]),

      funcionalidades:
        "La página web cuenta con un buscador de países en la parte superior, que permite buscar países por nombre en tiempo real. También se pueden filtrar países por región utilizando una lista desplegable en la parte superior derecha de la página. Al hacer clic en un país, se muestra una vista detallada con información adicional, incluyendo una imagen de la bandera del país.",

      diseño:
        "La página tiene un diseño sencillo y minimalista, con una paleta de colores neutros y elementos visuales que destacan la información relevante de cada país. La información está organizada en secciones claramente definidas para una fácil navegación.",

      resultados:
        "El sitio web es efectivo en su objetivo de presentar información de los países de manera ordenada y fácil de entender. El sitio también es responsivo, adaptándose a diferentes tamaños de pantalla y dispositivos.",

      leccionesAprendidas:
        "Aunque se trata de una página sencilla, su diseño y funcionalidades demuestran la utilidad de las tecnologías web modernas en el desarrollo de aplicaciones en línea.",
    },
    url:'https://codinapicountries.vercel.app/'
  },
  {
    id: 3,
    titulo: "Portafolio",
    img: Portafolio,
    des: "Un sitio web desarrollado con tecnologías como React, CSS, Boostrap, Javascript, Aquí podrás encontrar una selección de mis trabajos más destacados y logros profesionales. Esta página web ha sido diseñada para presentar de manera clara y organizada mi experiencia y habilidades. ",
    descripcion: {
      objetivo:
    "El objetivo principal de mi portafolio en línea es mostrar una selección de mis trabajos y habilidades más destacados de manera clara y organizada. La página web ha sido diseñada para presentar mi experiencia y habilidades utilizando tecnologías modernas.",
  tecnologias: elegir(["JavaScript","React","CSS","Boostrap"]),
  funcionalidades:
    "La página web de mi portafolio cuenta con una sección de proyectos que muestra una colección de mis trabajos más relevantes. Cada proyecto cuenta con una breve descripción, imágenes y detalles sobre mi rol en el mismo. Además, también he incluido testimonios de clientes y colaboradores para dar una idea de cómo es trabajar conmigo.",
  diseño:
    "La página web de mi portafolio tiene un diseño atractivo y organizado que resalta la información relevante de cada proyecto. El diseño utiliza una paleta de colores atractiva y elementos visuales que ayudan a guiar la navegación del usuario.",
  resultados:
    "El sitio web de mi portafolio ha sido efectivo en su objetivo de presentar mi experiencia y habilidades de manera clara y organizada. El sitio también es responsivo, adaptándose a diferentes tamaños de pantalla y dispositivos.",
  leccionesAprendidas:
    "La creación de mi portafolio me ha permitido aprender y mejorar mis habilidades en el desarrollo web utilizando tecnologías modernas como JavaScript, React, CSS y Boostrap."
},
url:"https://portafolio-jcodina1.vercel.app/"
  },{
    id: 4,
    titulo: "Minerales de colombia S.A.S",
    img: Minerales,
    des: "Minerales Colombia S.A.S. con HTML y CSS, presentando la empresa y sus servicios de manera clara y accesible. El diseño es profesional, jerarquizado y responsivo. El proyecto me permitió mejorar mis habilidades en desarrollo web y demostrar mi capacidad para crear sitios efectivos y atractivos.",
    descripcion: {
      objetivo:
      "El objetivo principal de la página web de Minerales Colombia S.A.S. es presentar la empresa y sus servicios de manera clara y accesible para clientes y visitantes. La página web ha sido diseñada para informar sobre la empresa, sus servicios, y los minerales que produce.",
    tecnologias: ["HTML", "CSS"],
    funcionalidades:
      "La página web cuenta con una página de inicio que presenta la empresa y sus servicios de manera resumida. Además, hay secciones dedicadas a describir en detalle los servicios ofrecidos por la empresa y los tipos de minerales que produce. La navegación es sencilla y fácil de usar, y hay un formulario de contacto que permite a los visitantes comunicarse directamente con la empresa.",
    diseño:
      "La página web utiliza una combinación de colores atractiva y elementos visuales que destacan la información relevante de cada sección. El diseño es limpio y profesional, con una jerarquía clara que guía al visitante a través de la información presentada.",
    resultados:
      "La página web de Minerales Colombia S.A.S. es efectiva en su objetivo de presentar la empresa y sus servicios de manera clara y accesible. El sitio también es responsivo, adaptándose a diferentes tamaños de pantalla y dispositivos, lo que lo hace fácilmente accesible para una audiencia más amplia.",
    leccionesAprendidas:
      "La creación de la página web de Minerales Colombia S.A.S. ha permitido aprender y mejorar habilidades en el desarrollo web utilizando tecnologías como HTML y CSS para crear sitios web eficaces y atractivos."
  },
  url:'https://mineralescolombiasas.com/'
  }
  
];


function elegir(tecnologia){
  var nuevo =tecnologia.map(tec=>habilidades.find(e=>e.name===tec))
  return nuevo.map(n=>{return {name:n.name,color:n.color}})
  
}

export const paises = [
  {nombre: "Afganistán", indicativo: "+93", bandera: "🇦🇫"},
  {nombre: "Albania", indicativo: "+355", bandera: "🇦🇱"},
  {nombre: "Alemania", indicativo: "+49", bandera: "🇩🇪"},
  {nombre: "Andorra", indicativo: "+376", bandera: "🇦🇩"},
  {nombre: "Angola", indicativo: "+244", bandera: "🇦🇴"},
  {nombre: "Antigua y Barbuda", indicativo: "+1-268", bandera: "🇦🇬"},
  {nombre: "Arabia Saudita", indicativo: "+966", bandera: "🇸🇦"},
  {nombre: "Argelia", indicativo: "+213", bandera: "🇩🇿"},
  {nombre: "Argentina", indicativo: "+54", bandera: "🇦🇷"},
  {nombre: "Armenia", indicativo: "+374", bandera: "🇦🇲"},
  {nombre: "Australia", indicativo: "+61", bandera: "🇦🇺"},
  {nombre: "Austria", indicativo: "+43", bandera: "🇦🇹"},
  {nombre: "Azerbaiyán", indicativo: "+994", bandera: "🇦🇿"},
  {nombre: "Bahamas", indicativo: "+1-242", bandera: "🇧🇸"},
  {nombre: "Bangladés", indicativo: "+880", bandera: "🇧🇩"},
  {nombre: "Barbados", indicativo: "+1-246", bandera: "🇧🇧"},
  {nombre: "Baréin", indicativo: "+973", bandera: "🇧🇭"},
  {nombre: "Bélgica", indicativo: "+32", bandera: "🇧🇪"},
  {nombre: "Belice", indicativo: "+501", bandera: "🇧🇿"},
  {nombre: "Benín", indicativo: "+229", bandera: "🇧🇯"},
  {nombre: "Bielorrusia", indicativo: "+375", bandera: "🇧🇾"},
  {nombre: "Birmania", indicativo: "+95", bandera: "🇲🇲"},
  {nombre: "Bolivia", indicativo: "+591", bandera: "🇧🇴"},
  {nombre: "Bosnia y Herzegovina", indicativo: "+387", bandera: "🇧🇦"},
  {nombre: "Botsuana", indicativo: "+267", bandera: "🇧🇼"},
  {nombre: "Brasil", indicativo: "+55", bandera: "🇧🇷"},
  {nombre: "Brunéi", indicativo: "+673", bandera: "🇧🇳"},
  {nombre: "Bulgaria", indicativo: "+359", bandera: "🇧🇬"},
  {nombre: "Burkina Faso", indicativo: "+226", bandera: "🇧🇫"},
  {nombre: "Burundi", indicativo: "+257", bandera: "🇧🇮"},
  {nombre: "Bután", indicativo: "+975", bandera: "🇧🇹"},
  {nombre: "Cabo Verde", indicativo: "+238", bandera: "🇨🇻"},
  {nombre: "Camboya", indicativo: "+855", bandera: "🇰🇭"},
  {nombre: "Camerún", indicativo: "+237", bandera: "🇨🇲"},
  {nombre: "Canadá", indicativo: "+1", bandera: "🇨🇦"},
  {nombre: "Catar", indicativo: "+974", bandera: "🇶🇦"},
  {nombre: "Chad", indicativo: "+235", bandera: "🇹🇩"},
  {nombre: "Chile", indicativo: "+56", bandera: "🇨🇱"},
  {nombre: "China", indicativo: "+86", bandera: "🇨🇳"},
  {nombre: "Chipre", indicativo: "+357", bandera: "🇨🇾"},
  {nombre: "Colombia", indicativo: "+57", bandera: "🇨🇴"},
  {nombre: "Comoras", indicativo: "+269", bandera: "🇰🇲"},
  {nombre: "Congo", indicativo: "+242", bandera: "🇨🇬"},
  {nombre: "Corea del Norte", indicativo: "+850", bandera: "🇰🇵"},
  {nombre: "Corea del Sur", indicativo: "+82", bandera: "🇰🇷"},
  {nombre: "Costa de Marfil", indicativo: "+225", bandera: "🇨🇮"},
  {nombre: "Costa Rica", indicativo: "+506", bandera: "🇨🇷"},
  {nombre: "Croacia", indicativo: "+385", bandera: "🇭🇷"},
  {nombre: "Cuba", indicativo: "+53", bandera: "🇨🇺"},
  {nombre: "Dinamarca", indicativo: "+45", bandera: "🇩🇰"},
  {nombre: "Dominica", indicativo: "+1-767", bandera: "🇩🇲"},
  {nombre: "Ecuador", indicativo: "+593", bandera: "🇪🇨"},
  {nombre: "Egipto", indicativo: "+20", bandera: "🇪🇬"},
  {nombre: "El Salvador", indicativo: "+503", bandera: "🇸🇻"},
  {nombre: "Emiratos Árabes Unidos", indicativo: "+971", bandera: "🇦🇪"},
  {nombre: "Eritrea", indicativo: "+291", bandera: "🇪🇷"},
  {nombre: "Eslovaquia", indicativo: "+421", bandera: "🇸🇰"},
  {nombre: "Eslovenia", indicativo: "+386", bandera: "🇸🇮"},
  {nombre: "España", indicativo: "+34", bandera: "🇪🇸"},
  {nombre: "Estados Unidos", indicativo: "+1", bandera: "🇺🇸"},
  {nombre: "Estonia", indicativo: "+372", bandera: "🇪🇪"},
  {nombre: "Etiopía", indicativo: "+251", bandera: "🇪🇹"},
  {nombre: "Filipinas", indicativo: "+63", bandera: "🇵🇭"},
  {nombre: "Finlandia", indicativo: "+358", bandera: "🇫🇮"},
  {nombre: "Fiyi", indicativo: "+679", bandera: "🇫🇯"},
  {nombre: "Francia", indicativo: "+33", bandera: "🇫🇷"},
  {nombre: "Gabón", indicativo: "+241", bandera: "🇬🇦"},
  {nombre: "Gambia", indicativo: "+220", bandera: "🇬🇲"},
  {nombre: "Georgia", indicativo: "+995", bandera: "🇬🇪"},
  {nombre: "Ghana", indicativo: "+233", bandera: "🇬🇭"},
  {nombre: "Granada", indicativo: "+1-473", bandera: "🇬🇩"},
  {nombre: "Grecia", indicativo: "+30", bandera: "🇬🇷"},
  {nombre: "Guatemala", indicativo: "+502", bandera: "🇬🇹"},
  {nombre: "Guinea", indicativo: "+224", bandera: "🇬🇳"},
  {nombre: "Guinea-Bissau", indicativo: "+245", bandera: "🇬🇼"},
  {nombre: "Guinea Ecuatorial", indicativo: "+240", bandera: "🇬🇶"},
  {nombre: "Guyana", indicativo: "+592", bandera: "🇬🇾"},
  {nombre: "Haití", indicativo: "+509", bandera: "🇭🇹"},
  {nombre: "Honduras", indicativo: "+504", bandera: "🇭🇳"},
  {nombre: "Hungría", indicativo: "+36", bandera: "🇭🇺"},
  {nombre: "India", indicativo: "+91", bandera: "🇮🇳"},
  {nombre: "Indonesia", indicativo: "+62", bandera: "🇮🇩"},
  {nombre: "Irak", indicativo: "+964", bandera: "🇮🇶"},
  {nombre: "Irán", indicativo: "+98", bandera: "🇮🇷"},
  {nombre: "Irlanda", indicativo: "+353", bandera: "🇮🇪"},
  {nombre: "Islandia", indicativo: "+354", bandera: "🇮🇸"},
  {nombre: "Islas Marshall", indicativo: "+692", bandera: "🇲🇭"},
  {nombre: "Islas Salomón", indicativo: "+677", bandera: "🇸🇧"},
  {nombre: "Israel", indicativo: "+972", bandera: "🇮🇱"},
  {nombre: "Italia", indicativo: "+39", bandera: "🇮🇹"},
  {nombre: "Jamaica", indicativo: "+1-876", bandera: "🇯🇲"},
  {nombre: "Japón", indicativo: "+81", bandera: "🇯🇵"},
  {nombre: "Jordania", indicativo: "+962", bandera: "🇯🇴"},
  {nombre: "Kazajistán", indicativo: "+7", bandera: "🇰🇿"},
  {nombre: "Kenia", indicativo: "+254", bandera: "🇰🇪"},
  {nombre: "Kirguistán", indicativo: "+996", bandera: "🇰🇬"},
  {nombre: "Kiribati", indicativo: "+686", bandera: "🇰🇮"},
  {nombre: "Kuwait", indicativo: "+965", bandera: "🇰🇼"},
  {nombre: "Laos", indicativo: "+856", bandera: "🇱🇦"},
  {nombre: "Lesoto", indicativo: "+266", bandera: "🇱🇸"},
  {nombre: "Letonia", indicativo: "+371", bandera: "🇱🇻"},
  {nombre: "Líbano", indicativo: "+961", bandera: "🇱🇧"},
  {nombre: "Liberia", indicativo: "+231", bandera: "🇱🇷"},
  {nombre: "Libia", indicativo: "+218", bandera: "🇱🇾"},
  {nombre: "Liechtenstein", indicativo: "+423", bandera: "🇱🇮"},
  {nombre: "Lituania", indicativo: "+370", bandera: "🇱🇹"},
  {nombre: "Luxemburgo", indicativo: "+352", bandera: "🇱🇺"},
  {nombre: "Macedonia del Norte", indicativo: "+389", bandera: "🇲🇰"},
  {nombre: "Madagascar", indicativo: "+261", bandera: "🇲🇬"},
  {nombre: "Malasia", indicativo: "+60", bandera: "🇲🇾"},
  {nombre: "Malaui", indicativo: "+265", bandera: "🇲🇼"},
  {nombre: "Maldivas", indicativo: "+960", bandera: "🇲🇻"},
  {nombre: "Malí", indicativo: "+223", bandera: "🇲🇱"},
  {nombre: "Malta", indicativo: "+356", bandera: "🇲🇹"},
  {nombre: "Marruecos", indicativo: "+212", bandera: "🇲🇦"},
  {nombre: "Mauricio", indicativo: "+230", bandera: "🇲🇺"},
  {nombre: "Mauritania", indicativo: "+222", bandera: "🇲🇷"},
  {nombre: "México", indicativo: "+52", bandera: "🇲🇽"},
  {nombre: "Micronesia", indicativo: "+691", bandera: "🇫🇲"},
  {nombre: "Moldavia", indicativo: "+373", bandera: "🇲🇩"},
  {nombre: "Mónaco", indicativo: "+377", bandera: "🇲🇨"},
  {nombre: "Mongolia", indicativo: "+976", bandera: "🇲🇳"},
  {nombre: "Montenegro", indicativo: "+382", bandera: "🇲🇪"},
  {nombre: "Mozambique", indicativo: "+258", bandera: "🇲🇿"},
  {nombre: "Namibia", indicativo: "+264", bandera: "🇳🇦"},
  {nombre: "Nauru", indicativo: "+674", bandera: "🇳🇷"},
  {nombre: "Nepal", indicativo: "+977", bandera: "🇳🇵"},
  {nombre: "Nicaragua", indicativo: "+505", bandera: "🇳🇮"},
  {nombre: "Níger", indicativo: "+227", bandera: "🇳🇪"},
  {nombre: "Nigeria", indicativo: "+234", bandera: "🇳🇬"},
  {nombre: "Noruega", indicativo: "+47", bandera: "🇳🇴"},
  {nombre: "Nueva Zelanda", indicativo: "+64", bandera: "🇳🇿"},
  {nombre: "Omán", indicativo: "+968", bandera: "🇴🇲"},
  {nombre: "Países Bajos", indicativo: "+31", bandera: "🇳🇱"},
  {nombre: "Pakistán", indicativo: "+92", bandera: "🇵🇰"},
  {nombre: "Palaos", indicativo: "+680", bandera: "🇵🇼"},
  {nombre: "Panamá", indicativo: "+507", bandera: "🇵🇦"},
  {nombre: "Papúa Nueva Guinea", indicativo: "+675", bandera: "🇵🇬"},
  {nombre: "Paraguay", indicativo: "+595", bandera: "🇵🇾"},
  {nombre: "Perú", indicativo: "+51", bandera: "🇵🇪"},
  {nombre: "Polonia", indicativo: "+48", bandera: "🇵🇱"},
  {nombre: "Portugal", indicativo: "+351", bandera: "🇵🇹"},
  {nombre: "Reino Unido", indicativo: "+44", bandera: "🇬🇧"},
  {nombre: "República Centroafricana", indicativo: "+236", bandera: "🇨🇫"},
  {nombre: "República Checa", indicativo: "+420", bandera: "🇨🇿"},
  {nombre: "República del Congo", indicativo: "+242", bandera: "🇨🇬"},
  {nombre: "República Democrática del Congo", indicativo: "+243", bandera: "🇨🇩"},
  {nombre: "República Dominicana", indicativo: "+1-809, +1-829, +1-849", bandera: "🇩🇴"},
  {nombre: "Ruanda", indicativo: "+250", bandera: "🇷🇼"},
  {nombre: "Rumania", indicativo: "+40", bandera: "🇷🇴"},
  {nombre: "Rusia", indicativo: "+7", bandera: "🇷🇺"},
  {nombre: "Samoa", indicativo: "+685", bandera: "🇼🇸"},
  {nombre: "San Cristóbal y Nieves", indicativo: "+1-869", bandera: "🇰🇳"},
  {nombre: "San Marino", indicativo: "+378", bandera: "🇸🇲"},
  {nombre: "San Vicente y las Granadinas", indicativo: "+1-784", bandera: "🇻🇨"},
  {nombre: "Santa Lucía", indicativo: "+1-758", bandera: "🇱🇨"},
  {nombre: "Santo Tomé y Príncipe", indicativo: "+239", bandera: "🇸🇹"},
  {nombre: "Senegal", indicativo: "+221", bandera: "🇸🇳"},
  {nombre: "Serbia", indicativo: "+381", bandera: "🇷🇸"},
  {nombre: "Seychelles", indicativo: "+248", bandera: "🇸🇨"},
  {nombre: "Sierra Leona", indicativo: "+232", bandera: "🇸🇱"},
  {nombre: "Singapur", indicativo: "+65", bandera: "🇸🇬"},
  {nombre: "Siria", indicativo: "+963", bandera: "🇸🇾"},
  {nombre: "Somalia", indicativo: "+252", bandera: "🇸🇴"},
  {nombre: "Sri Lanka", indicativo: "+94", bandera: "🇱🇰"},
  {nombre: "Suazilandia", indicativo: "+268", bandera: "🇸🇿"},
  {nombre: "Sudáfrica", indicativo: "+27", bandera: "🇿🇦"},
  {nombre: "Sudán", indicativo: "+249", bandera: "🇸🇩"},
  {nombre: "Sudán del Sur", indicativo: "+211", bandera: "🇸🇸"},
  {nombre: "Sudáfrica", indicativo: "+27", bandera: "🇿🇦"},
  {nombre: "Sudán", indicativo: "+249", bandera: "🇸🇩"},
  {nombre: "Sudán del Sur", indicativo: "+211", bandera: "🇸🇸"},
  {nombre: "Suecia", indicativo: "+46", bandera: "🇸🇪"},
  {nombre: "Suiza", indicativo: "+41", bandera: "🇨🇭"},
  {nombre: "Surinam", indicativo: "+597", bandera: "🇸🇷"},
  {nombre: "Tailandia", indicativo: "+66", bandera: "🇹🇭"},
  {nombre: "Taiwán", indicativo: "+886", bandera: "🇹🇼"},
  {nombre: "Tanzania", indicativo: "+255", bandera: "🇹🇿"},
  {nombre: "Tayikistán", indicativo: "+992", bandera: "🇹🇯"},
  {nombre: "Timor Oriental", indicativo: "+670", bandera: "🇹🇱"},
  {nombre: "Togo", indicativo: "+228", bandera: "🇹🇬"},
  {nombre: "Tonga", indicativo: "+676", bandera: "🇹🇴"},
  {nombre: "Trinidad y Tobago", indicativo: "+1 868", bandera: "🇹🇹"},
  {nombre: "Túnez", indicativo: "+216", bandera: "🇹🇳"},
  {nombre: "Turkmenistán", indicativo: "+993", bandera: "🇹🇲"},
  {nombre: "Turquía", indicativo: "+90", bandera: "🇹🇷"},
  {nombre: "Tuvalu", indicativo: "+688", bandera: "🇹🇻"},
  {nombre: "Ucrania", indicativo: "+380", bandera: "🇺🇦"},
  {nombre: "Uganda", indicativo: "+256", bandera: "🇺🇬"},
  {nombre: "Uruguay", indicativo: "+598", bandera: "🇺🇾"},
  {nombre: "Uzbekistán", indicativo: "+998", bandera: "🇺🇿"},
  {nombre: "Vanuatu", indicativo: "+678", bandera: "🇻🇺"},
  {nombre: "Venezuela", indicativo: "+58", bandera: "🇻🇪"},
  {nombre: "Vietnam", indicativo: "+84", bandera: "🇻🇳"},
  {nombre: "Yemen", indicativo: "+967", bandera: "🇾🇪"},
  {nombre: "Yibuti", indicativo: "+253", bandera: "🇩🇯"},
  {nombre: "Zambia", indicativo: "+260", bandera: "🇿🇲"},
  {nombre: "Zimbabue", indicativo: "+263", bandera: "🇿🇼"}
];