import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button} from 'react-bootstrap';

function App() {
  return (
    <div class='comp1'>
<Form className="ff">
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="tt">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted" className="text1">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="tt">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" className="tt" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


        
    </div>
  );
}

export default App;
