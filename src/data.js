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
export const lenguajes = [
  { id: 1, name: "JavaScript", img: JavaScript, des: "" },
  { id: 2, name: "Java", img: Java, des: "" },
  { id: 3, name: "Python", img: Python, des: "" },
];
export const frontEnd = [
  { id: 4, name: "HTML", img: HTML, des: "" },
  { id: 5, name: "CSS", img: CSS, des: "" },
  { id: 6, name: "React", img: react, des: "" },
  { id: 7, name: "Redux", img: Redux, des: "" },
  { id: 8, name: "Boostrap", img: Boostrap, des: "" },
  { id: 9, name: "MaterialUi", img: MaterialUi, des: "" },
];
export const backEnd = [
  { id: 10, name: "NodeJs", img: NodeJs, des: "" },
  { id: 11, name: "Git", img: Git, des: "" },
  { id: 12, name: "Bash", img: Bash, des: "" },
  { id: 13, name: "MySql", img: MySql, des: "" },
  { id: 14, name: "PostgresSql", img: PostgresSql, des: "" },
  { id: 15, name: "Sequelize", img: Sequelize, des: "" },
];

export const proyectos = [
  {
    id: 1,
    titulo: "Beerland",
    img: Beerland,
    des: "Beerlanda es una página web de cervezas con detalles de marcas y países desarrollada con React, Next.js, CSS y Punk API. Los usuarios buscan y filtran por nombre, país de origen, amargor y ABV. El diseño es moderno y responsivo. Destaca la integración de API pública y tecnologías web modernas para crear aplicaciones web de alta calidad.",
    descripcion: {
      Objetivo:
        "La página web tiene como objetivo presentar una lista de cervezas de diferentes marcas y países, proporcionando detalles de cada una de ellas como su nombre, descripción, precio, y volumen alcohólico.",
      Tecnologías:
        " La página web fue desarrollada utilizando tecnologías web como React, Next.js, CSS, y una API pública de cervezas llamada Punk API.",

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
    des: "Un sitio web desarrollado con tecnologías como React y nodeJs, que muestra información sobre países del mundo. Los usuarios pueden buscar países por nombre y filtrarlos por región. Al hacer clic en un país, se muestran detalles del pais, El diseño es minimalista y la información está organizada en secciones para facilitar la navegación. ",
    descripcion: {
      Objetivo:
        "El objetivo principal de la página web es mostrar información relevante acerca de los países del mundo. Los usuarios pueden buscar países por nombre, filtrarlos por región, y ver detalles de cada país como su bandera, capital, población, idioma y moneda oficial.",

      Tecnologías:
        " El sitio web fue desarrollado utilizando tecnologías web como React, Next.js, y CSS.",

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
];
