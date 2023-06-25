import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          profilePicture: formData.profilePicture,
          address: formData.address,
          phoneNumber: formData.phoneNumber,
          birthDate: formData.birthDate,
          gender: formData.gender,
          programStudy: formData.programStudy,
          faculty: getFaculty(formData.programStudy),
        }),
      });
      if (response.ok) {
        navigate("/student");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const getFaculty = (programStudy) => {
    if (
      programStudy === "Ekonomi" ||
      programStudy === "Manajemen" ||
      programStudy === "Akuntansi"
    ) {
      return "Fakultas Ekonomi";
    } else if (
      programStudy === "Administrasi Publik" ||
      programStudy === "Administrasi Bisnis" ||
      programStudy === "Hubungan Internasional"
    ) {
      return "Fakultas Ilmu Sosial dan Politik";
    } else if (
      programStudy === "Teknik Sipil" ||
      programStudy === "Arsitektur"
    ) {
      return "Fakultas Teknik";
    } else if (
      programStudy === "Matematika" ||
      programStudy === "Fisika" ||
      programStudy === "Informatika"
    ) {
      return "Fakultas Teknologi Informasi dan Sains";
    } else {
      return "";
    }
  };

  return (
    <>
      <h2>Add Student</h2>
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
          <label htmlFor="profilePicture">Profile Picture:</label>
          <Input
            type="text"
            id="profilePicture"
            name="profilePicture"
            data-testid="profilePicture"
            value={formData.profilePicture}
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
        <Button type="submit" data-testid="add-btn">
          Add Student
        </Button>
      </form>
    </>
  );
};

export default AddStudent;