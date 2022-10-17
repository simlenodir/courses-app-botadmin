import { useEffect, useState } from "react";
import {
    CardLink,
    ListGroup,
    ListGroupItem,
    CardTitle,
    CardBody,
    Card,
  } from "reactstrap";

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://course-bot-again.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, [courses]);

  return (
    <>
      <ul className="d-flex flex-wrap justify-content-around my-3">
        {courses.length &&
          courses.map((e, i) => (
            <li className="list-unstyled mx-1 my-3" key={i}>
              <Card
                style={{
                  width: "16rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{e.name}</CardTitle>
                </CardBody>
                <ListGroup
                  flush
                  style={{
                    height: "10rem",
                  }}
                >
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
    </>
  );
};
