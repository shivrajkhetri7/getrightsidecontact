import React from 'react'
import './style.css'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap'

export default function PopUpForm(props) {
    return (
        <div>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='Popup-Contact'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/* Write The Title For the Pop Over Here */}
                    </Modal.Title>
                </Modal.Header>
                <p className="contact-popup-headding">Get Right Property</p>
                <Modal.Body className="show-grid">
                    <Container>
                        <Form autoComplete="off">
                            <Form.Row>
                                <Form.Group as={Col}>
                                    {/* <Form.Label>Name</Form.Label> */}
                                    <Form.Control className='form-txt' type="text" placeholder="Name" autoComplete="off" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group >
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control  className='form-txt' type="text" placeholder=" Email" />
                            </Form.Group>
                            <Form.Group >
                            <div className='form-group'>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <select className="form-control form-txt countySelectionCode" id="FormControlSelect">
                                                <option className='countycode'>+ 91</option>
                                                <option className='countycode'>+ 61</option>
                                                <option className='countycode'>+ 11</option>
                                                <option className='countycode'>+ 12</option>
                                            </select>
                                        </div>
                                        <input type="text" class="form-control form-txt" aria-label="Text input with dropdown button" />
                                    </div>
                                </div>
                            </Form.Group>
                           

                            <Form.Row>
                    
                                        {/* <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group> */}
                                        <Form.Group as={Col} controlId="formGridState">
                                            {/* <Form.Label>State</Form.Label> */}
                                            <Form.Control as="select" className='form-txt' defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Delhi</option>
                                            </Form.Control>
                                        </Form.Group>
                            </Form.Row>

                            <Form.Row >
                                <Form.Text className="text-muted pb-2 m-auto">I Agree to Get Right Property' <a href='#'>Terms of Use</a> </Form.Text>
                            </Form.Row>
                            <Button  className="submit-btn" type="submit">
                          Contact
                            </Button>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>

        </div>
    )
}


