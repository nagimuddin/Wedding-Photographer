import React from "react";
import { Button, Form } from "react-bootstrap";

const CheckOut = () => {
  return (
    <div className="w-50 m-auto text-primary">
      <h2>Check Out</h2>
      <Form>
      <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control type="text" placeholder="Write Your Addres" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control type="Number" placeholder="Give Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default CheckOut;
