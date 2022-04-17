import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Datiles = () => {
    const {serviceId}= useParams();
    return (
        <div>
            
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title><h2>datalls:{serviceId}</h2></Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio libero natus aliquam numquam aliquid eos sequi? Recusandae illo non odit rem, nesciunt beatae. Dolore sed alias atque iusto deleniti odit.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Datiles;