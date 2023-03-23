import { Accordion, Card } from "react-bootstrap";

export default function Acordion(props){
    const{handleShow,lenguajes,frontEnd,backEnd}=props
    return(
        <Accordion>
          <Accordion.Item eventKey="0" onClick={handleShow}>
            <Accordion.Header>LENGUAJES</Accordion.Header>
            <Accordion.Body>
              {lenguajes.map((f) => (
                <Card key={f.id}>
                  <Card.Img src={f.img} />
                  <Card.Body className="card-bodyh">
                    <Card.Title>{f.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" onClick={handleShow}>
            <Accordion.Header>FRONTEND</Accordion.Header>
            <Accordion.Body>
              {frontEnd.map((f) => (
                <Card key={f.id}>
                  <Card.Img src={f.img} />
                  <Card.Body className="card-bodyh">
                    <Card.Title>{f.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" onClick={handleShow}>
            <Accordion.Header>BACKEND</Accordion.Header>
            <Accordion.Body>
              {backEnd.map((f) => (
                <Card key={f.id}>
                  <Card.Img src={f.img} />
                  <Card.Body className="card-bodyh">
                    <Card.Title>{f.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    )
}