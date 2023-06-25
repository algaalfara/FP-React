import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>404 | Not Found</h2>
      <Button data-testid="back" onClick={handleBack}>
        Take Me Back
      </Button>
    </>
  );
};

export default NotFound;