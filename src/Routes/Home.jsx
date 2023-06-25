import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <h2>Student Portal</h2>
      <Button colorScheme="red">Ini Button</Button>
      <Link to="/student" data-testid="student-btn">
        All Student
      </Link>
    </>
  );
};

export default Home;