import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const emptyData = {
  name: "",
  phone: "",
  email: "",
  address: "",
};

function ContactForm({ submitForm }) {
  const [data, setData] = useState(emptyData);

  const handleChanges = (e) => {
    e.preventDefault();

    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    submitForm(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div class="d-flex gap-2">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleChanges} name="name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control onChange={handleChanges} name="phone" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={handleChanges} name="email" />
        </Form.Group>

        <Form.Group className="mb-3 w-75">
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={handleChanges} name="address" />
        </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
