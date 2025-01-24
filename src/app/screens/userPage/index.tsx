import { Container } from "@mui/material";
import React, { useState } from "react";
import "../../../css/user.css";

const UserPage = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    // Call an API to save the updated profile details
  };

  return (
    <Container>
      <div className="profile-section">
        <h2>Profile Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </Container>
  );
};

export default UserPage;
