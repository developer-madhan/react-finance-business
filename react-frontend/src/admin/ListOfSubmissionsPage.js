// ListOfSubmissionsPage.js
import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";


function ListOfSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/formSubmissions')
      .then(response => response.json())
      .then(data => setSubmissions(data.data))
      .catch(error => console.error('Error fetching submissions:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/formSubmissions/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        // Filter out the deleted submission
        setSubmissions(submissions.filter(submission => submission.id !== id));
        alert('Submission deleted successfully!');
      } else {
        alert('Error deleting submission. Please try again later.');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  return (
    <Container>
      <h1 className="mt-4">List of Submissions</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission.id}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.message}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(submission.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default ListOfSubmissionsPage;
