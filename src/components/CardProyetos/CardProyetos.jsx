import { Badge, Button ,Card} from "react-bootstrap";


function CardProyetos({titulo,img,des,tec}) {
  
  return (
    <div className="cardProyetos" >
      <Card.Img variant="top" src={img} />
      
      <Card.Body>
        <div className="nametech">
          <Card.Title>{titulo}</Card.Title>
          <div>{tec.map((t,index)=><Badge key={index} pill bg="" style={{background:t.color}}>{t.name}</Badge>)}</div>
        </div>
        <Card.Text>{des}</Card.Text>
        <Button variant="primary">Mas Info</Button>
      </Card.Body>
      
    </div>
  );
}

export default CardProyetos;
