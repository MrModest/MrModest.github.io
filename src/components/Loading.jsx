import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div style={{ paddingLeft: '50em', marginTop: '10em', backgroundColor: 'grey' }}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
  </div>
  );
}