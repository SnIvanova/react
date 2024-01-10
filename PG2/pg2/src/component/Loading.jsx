import React from 'react'
import { Button, Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  )
}
