import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Bootstrap = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} sm={12} md={6} className='justify-content-start'>
              Hello
            </Col>
            <Col xs={12} sm={12} md={6} className='justify-content-start'>
              World
            </Col>
        </Row>
    </Container>
  )
}

export default Bootstrap