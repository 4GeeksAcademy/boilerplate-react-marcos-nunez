import { Button, Card } from "react-bootstrap";

function Item({ name, number, address, email, buttonFunction, openContact }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        {/* Nombre del contacto */}
        <Card.Title className="text-center">{name}</Card.Title>

        {/* Detalles del contacto */}
        <div className="row">
          <div className="col-12 col-md-6 mb-2">
            <strong>Number:</strong> <span>{number}</span>
          </div>
          <div className="col-12 col-md-6 mb-2">
            <strong>Address:</strong> <span>{address}</span>
          </div>
        </div>

        <div className="mb-2">
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </div>

        {/* Botón de eliminar */}
        <div className="text-center mt-3">
          <Button variant="outline-danger" onClick={buttonFunction}>
            X
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
