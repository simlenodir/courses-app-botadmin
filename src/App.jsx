import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  CardLink,
  ListGroup,
  ListGroupItem,
  CardTitle,
  CardBody,
  Card,
} from "reactstrap";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://course-bot-again.herokuapp.com/courseRequest")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div className="App container">
      <h3 className="text-center">Admin page of Courses </h3>
      <ul className="d-flex flex-wrap justify-content-around my-3">
        {data.length &&
          data.map((e, i) => (
            <li className="list-unstyled mx-1 my-3" key={i}>
              <Card
                style={{
                  width: "16rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{e.name}</CardTitle>
                </CardBody>
                <ListGroup flush style={{
                  height: "10rem",
                }}>
                  <ListGroupItem>phone: {e.phone}</ListGroupItem>
                  <ListGroupItem>location: {e.location}</ListGroupItem>
                </ListGroup>
                <CardBody>
                  <CardLink href="#">Edit</CardLink>
                  <CardLink href="#">Delete</CardLink>
                </CardBody>
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
