import React, { useState } from "react";
import "../../../css/order.css"; // Add custom styles
import "../../../css/user.css";
import { Container } from "@mui/material";

export default function OrdersPage() {
  // State to track the selected menu option
  const [activeSection, setActiveSection] = useState("Orders");

  // Function to render content dynamically
  const renderContent = () => {
    switch (activeSection) {
      case "Orders":
        return (
          <div>
            <h2>Order No: 000546456</h2>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-cell">
                    <img
                      src="/img/cf.jpg" // Replace with actual image URL
                      alt="Essential Oil"
                      className="product-image"
                    />
                    <span>Essential Oil</span>
                  </td>
                  <td>$20.00</td>
                  <td>1</td>
                  <td>$20.00</td>
                </tr>
                <tr>
                  <td className="product-cell">
                    <img
                      src="/img/sauvages.jpg" // Replace with actual image URL
                      alt="Essential Oil"
                      className="product-image"
                    />
                    <span> Dior Sauvage</span>
                  </td>
                  <td>$20.00</td>
                  <td>1</td>
                  <td>$20.00</td>
                </tr>
                <tr>
                  <td className="product-cell">
                    <img
                      src="/img/chanel.jpg" // Replace with actual image URL
                      alt="Essential Oil"
                      className="product-image"
                    />
                    <span>Essential Oil</span>
                  </td>
                  <td>$20.00</td>
                  <td>1</td>
                  <td>$20.00</td>
                </tr>
              </tbody>
            </table>

            <div className="details-footer">
              <div className="address-section">
                <h4>Delivery Address</h4>
                <p>100/1 A South Pirerbag</p>
                <p>Mirpur Dhaka-1216</p>
                <p>+8801627808712</p>
              </div>
              <div className="address-section">
                <h4>Billing Address</h4>
                <p>100/1 A South Pirerbag</p>
                <p>Mirpur Dhaka-1216</p>
                <p>+8801627808712</p>
              </div>
              <div className="address-section">
                <h4>Payment Method</h4>
                <p>Mastercard</p>
                <p>4405 **** 0101</p>
                <p>Credit Card</p>
              </div>
              {/* Total Summary */}
              <div className="order-total-summary">
                <div className="summary-item">
                  <strong>SubTotal:</strong>
                  <span>$60.00</span>
                </div>
                <div className="summary-item">
                  <strong>Cargo:</strong>
                  <span>$0.00</span>
                </div>
                <div className="summary-item">
                  <strong>Discount:</strong>
                  <span>$10.00</span>
                </div>
                <div className="summary-total">
                  <span>Total:</span>
                  <span>$61.50</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "Tracking":
        return (
          <div>
            <h2>Tracking Information</h2>
            <p>
              Your package is currently in transit and will be delivered soon.
            </p>
          </div>
        );
      case "Pending":
        return (
          <div>
            <h2>Pending Orders</h2>
            <p>You have no pending orders at the moment.</p>
          </div>
        );
      case "Profile":
        return (
          <div>
            <h2>Profile Details</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        );
      default:
        return <p>Please select an option from the menu.</p>;
    }
  };

  return (
    <Container>
      <div className="order-page">
        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="menu-section">
            <h3>Orders</h3>
            <ul>
              <li onClick={() => setActiveSection("Orders")}>Orders</li>
              <li onClick={() => setActiveSection("Tracking")}>Tracking</li>
              <li onClick={() => setActiveSection("Pending")}>Pending</li>
            </ul>
          </div>
          <div className="menu-section">
            <h3>Settings</h3>
            <ul>
              <li onClick={() => setActiveSection("Profile")}>Profile</li>
              <li onClick={() => setActiveSection("Address")}>Address</li>
              <li onClick={() => setActiveSection("Payment")}>Payment</li>
              <li onClick={() => setActiveSection("LogOut")}>Log Out</li>
            </ul>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="order-details">{renderContent()}</div>
      </div>
    </Container>
  );
}
