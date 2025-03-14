import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Input({ enterKeyFunction }) {
  return (
    <InputGroup
      className="mb-3"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          enterKeyFunction(e.target.value);
          e.target.value = "";
        }
      }}
    >
      <Form.Control
        placeholder="Input your contact list slug"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
}

export default Input;
