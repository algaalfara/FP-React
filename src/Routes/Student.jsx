import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Table, Button } from "@chakra-ui/react";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredStudents =
    filter === "All" ? students : students.filter((student) => student.faculty === filter);

  return (
    <>
      <h2>Student List</h2>
      <Select data-testid="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
      </Select>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="student-data-row">
                <td>{index + 1}</td>
                <td>
                  <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                </td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(student.id)}
                    data-testid={`delete-${student.id}`}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Student;
