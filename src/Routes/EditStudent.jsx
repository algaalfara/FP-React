import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        const data = await response.json();
        setFormData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          address: formData.address,
          phoneNumber: formData.phoneNumber,
          birthDate: formData.birthDate,
          gender: formData.gender,
          programStudy: formData.programStudy,
        }),
      });
      if (response.ok) {
        navigate.push("/student");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h2>Edit Student</h2>
      <img src={formData.profilePicture} alt="Profile" />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            data-testid="name"
            value={formData.fullname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            data-testid="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            data-testid="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <Input
            type="text"
            id="birthDate"
            name="birthDate"
            data-testid="date"
            value={formData.birthDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <Input
            type="text"
            id="gender"
            name="gender"
            data-testid="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="programStudy">Program Study:</label>
          <Input
            type="text"
            id="programStudy"
            name="programStudy"
            data-testid="prody"
            value={formData.programStudy}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" data-testid="edit-btn">
          Edit Student
        </Button>
      </form>
    </>
  );
};

export default EditStudent;