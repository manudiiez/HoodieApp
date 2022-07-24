import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

function ModalContainer({ state, changeState, title, children }) { 
  return (
    <Container>
      <Modal dialogClassName="myModal" id='myModal' show={state} onHide={changeState}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={changeState}>
            Close
          </Button>
          <Button variant="primary" onClick={changeState}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ModalContainer;

const Container = styled.div`
  
 

`