import Button from "react-bootstrap/Button";


const ButtonComponent = ({ onClick, name }) => {
  
 return (
  <Button variant="info" className="btn-custom" onClick={onClick}>
    {name}
  </Button>
 )
}

export default ButtonComponent;