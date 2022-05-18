import React from 'react'
import { Container } from 'react-bootstrap'

export default () => {
  return (
    <div className="pt-4 pb-4 text-center">
        <Container>
        <p className="mt-0 mb-0">© Copyright {new Date().getFullYear()} Vše food delivery - dovezeme vám vše</p>
        </Container>
    </div>
  )
}
