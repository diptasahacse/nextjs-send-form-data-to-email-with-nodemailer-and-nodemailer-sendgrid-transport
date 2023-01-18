import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import baseUrl from '../utils/baseUrl';
import axios from 'axios'

export default function Home() {
  let emailRef = useRef("");
  let phoneRef = useRef("");
  let messageRef = useRef("");
  let email, phone, message;



  const formHandler = async (event) => {
    event.preventDefault();
    try {
      email = emailRef.current.value;
      phone = phoneRef.current.value;
      message = messageRef.current.value;

      let formData = {
        email,
        phone,
        message
      }
      let url = `${baseUrl}/api/contact`
      const response = await axios.post(url, formData);
      console.log(response)

    }
    catch (error) {
      console.log(error)
    }


  }

  return (
    <Container>
      <div className='mt-5'>
        <h2 className='text-center my-5 bg-primary text-white p-3 border border-4 rounded border-success'>Node Mailer form</h2>
        <Form onSubmit={formHandler} className='border border-3 border-success rounded p-5'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' ref={emailRef} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control name='phone' ref={phoneRef} type="tel" placeholder="Phone" />
            </Form.Group>
          </Row>



          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control ref={messageRef} as="textarea" rows={3} />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </Container>
  )
}
