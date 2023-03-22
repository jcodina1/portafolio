import { Button ,Card} from "react-bootstrap";

import beerland from "../../assets/beerland.png";
import countries from "../../assets/countries.png";
import portafolio from "../../assets/portafolio.png";
function CardProyetos({titulo,img,des}) {
  return (
    <div className="cardProyetos" >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {des}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </div>
  );
}

export default CardProyetos;
