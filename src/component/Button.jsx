import Button from "react-bootstrap/Button";

function BTButton(props) {
  return (
    <Button className="mx-2" variant="primary" onClick={props.handleClick}>
      {props.name}
    </Button>
  );
}

export default BTButton;
