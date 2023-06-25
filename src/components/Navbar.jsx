import React from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <ChakraLink as={Link} to="/" data-testid="home-page">
          Student Portal
        </ChakraLink>
      </h1>
      <ul>
        <li>
          <ChakraLink as={Link} to="/student" data-testid="student-page">
            All Student
          </ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} to="/add" data-testid="add-page">
            Add Student
          </ChakraLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
