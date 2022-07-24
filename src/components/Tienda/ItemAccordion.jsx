import React from 'react'
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Accordion from 'react-bootstrap/Accordion';

const ItemAccordion = ({id, title, children}) => {
  return (
    <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
            {children}
        </Accordion.Body>
    </Accordion.Item>
      
  )
}

export default ItemAccordion