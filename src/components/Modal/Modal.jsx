
import { Button,Modal } from "react-bootstrap";

export default function Modals({show,handleClose}){
   
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🛈</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Si Deseas mayor informacion de como y en que proyectos he utilizado la
          habilidad da click en el nombre de esta.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    )
}