import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log(count);
  };

  const decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
    console.log(count);
  };

  const reset = (e) => {
    e.preventDefault();
    setCount(0);
  };

  return (
    <Card>
      <CardHeader>
        <h2>Counter</h2>
      </CardHeader>
      <CardBody>
        <h4>{count}</h4>
      </CardBody>
      <CardFooter>
        <Button variant="success" className="me-2" onClick={increment}>
          Increment
        </Button>
        <Button variant="warning" className="me-2" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="danger" className="me-2" onClick={reset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Counter;
