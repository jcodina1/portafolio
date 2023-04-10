import { useState } from "react";
import { Badge, Button ,Card, Offcanvas, Tab, Tabs} from "react-bootstrap";


function CardProyetos({titulo,img,des,url,descripcion}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
    console.log(url);};
  return (
    <div className="cardProyetos" >
      <Card.Img variant="top" src={img} />
      
      <Card.Body>
        <div className="nametech">
          <Card.Title>{titulo}</Card.Title>
          <div>{descripcion.tecnologias.map((t,index)=><Badge key={index} pill bg="" style={{background:t.color}}>{t.name}</Badge>)}</div>
        </div>
        <Card.Text>{des}</Card.Text>
        <Button variant="primary" onClick={handleShow}>Mas Info</Button>
      </Card.Body>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{titulo}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Tabs
      defaultActiveKey="Objetivo"
      className="mb-3"
    >
      <Tab eventKey="Objetivo" title="Objetivo">
        <p>{descripcion.objetivo}</p>
      </Tab>
      <Tab eventKey="Tecnologías" title="Tecnologías">
      <div>{descripcion.tecnologias.map((t,index)=><Badge key={index} pill bg="" style={{background:t.color}}>{t.name}</Badge>)}</div>
      </Tab>
      <Tab eventKey="Funcionalidades" title="Funcionalidades" >
        <p>{descripcion.funcionalidades}</p>
      </Tab>
      
    </Tabs>
    <Button variant="primary" href={url} target="_blank">Deploy de {titulo}</Button>
        </Offcanvas.Body>
      </Offcanvas>
    
    </div>
  );
}

export default CardProyetos;
