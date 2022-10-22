import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Button
        color="success"
        size="lg"
        outline
        onClick={() => navigate("/addItem")}
      >
        Add Item
      </Button>
    </>
  );
}
