import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default  function FormularioTestimonio() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>¿Cuál es tu nombre?</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>¿En qué empresa trabajaste conmigo?</Form.Label>
        <Form.Select size="sm">
        <option>Small select</option>
        <option>Small select</option>
        <option>Small select</option>
        <option>Small select</option>
        <option>Small select</option>
      </Form.Select>     
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>¿Cuál es tu nombre?</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>¿En qué proyecto trabajamos juntos?</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />       
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

