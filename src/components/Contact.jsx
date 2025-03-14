import { Button } from "react-bootstrap";

function Contact({ text, buttonFunction, openContact, isVisible }) {
  return (
    <>
      <div
        style={{
          marginBottom: "5px",
          width: "50% ",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {text}

        <Button
          variant="outline-secondary"
          onClick={() => {
            buttonFunction();
          }}
        >
          {" "}
          X{" "}
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => {
            openContact();
          }}
        >
          {" "}
          Show{" "}
        </Button>
      </div>
    </>
  );
}

export default Contact;
