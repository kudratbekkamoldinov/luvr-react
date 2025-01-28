import { Box, Button, Container } from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import {
  Order,
  OrderInquiry,
  OrderUpdateInput,
} from "../../../libs/types/order";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { OrderStatus } from "../../../libs/enums/order.enum";
import OrderService from "../../services/OrderService";
import { createSelector } from "@reduxjs/toolkit";
import {
  retrieveFinishedOrders,
  retrievePausedOrders,
  retrieveProcessOrders,
} from "./selector";
import "../../../css/order.css";
import "../../../css/user.css";
import { Messages, serverApi } from "../../../libs/config";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../../../libs/sweetAlert";
import { T } from "../../../libs/types/common";
import moment from "moment";
import MemberService from "../../services/MemberService";

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);

const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);

interface PausedOrderProps {
  setValue: (input: string) => void;
}

interface ProcessOrderProps {
  setValue: (input: string) => void;
}

export default function MyPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const { orderBuilder, setOrderBuilder, authMember, setAuthMember } = useGlobals();
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 4,
    orderStatus: OrderStatus.PAUSE,
  });

  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  const { processOrders } = useSelector(processOrdersRetriever);

  // HANDLERS

  const processOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // PAYMENT PROCESS

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };

      const confirmation = window.confirm(
        "Do you wart to proceed with payment?"
      );
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const finishedOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // PAYMENT PROCESS

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };

      const confirmation = window.confirm("Have you received your order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handlerLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();
      await sweetTopSuccessAlert("success", 700);
      setAuthMember(null);
      navigate("/");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1).then();
    }
  };

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log("Error fetching paused orders:", err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log("Error fetching process orders:", err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log("Error fetching finished orders:", err));
  }, [orderInquiry, orderBuilder]);

  // const handleChange = (e: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  if (!authMember) navigate("/");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSection = queryParams.get("section") || "Orders";

  const [activeSection, setActiveSection] = useState<string>(
    initialSection as string
  );
  const [formData, setFormData] = useState({});

  useEffect(() => {
    navigate(`/mypage?section=${activeSection}`);
  }, [activeSection]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    // Call an API to save the updated profile details
  };

  

  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };

      const confirmation = window.confirm("Do you wart to delete the order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const renderPausedOrders = (orders: Order[]) => {
    return (
      <div>
        <h2>Orders</h2>
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <h3>Order ID: {order._id}</h3>
            <p>Status: {order.orderStatus}</p>
            <p>Total: ${order.orderTotal}</p>
            <p>Delivery: ${order.orderDelivery}</p>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item) => {
                  const product = order.productData.find(
                    (p) => p._id === item.productId
                  );
                  return (
                    <tr key={item._id}>
                      <td className="product-cell">
                        <img
                          src={`${serverApi}/${product?.productImages[0]}`}
                          alt={product?.productName}
                          className="product-image"
                        />
                        <span>{product?.productName}</span>
                      </td>
                      <td>${item.itemPrice}</td>
                      <td>{item.itemQuantity}</td>
                      <td>${item.itemPrice * item.itemQuantity}</td>
                    </tr>
                  );
                })}

                <Box
                  className="order-btn"
                  sx={{
                    gap: "15px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    value={order._id}
                    onClick={deleteOrderHandler}
                    className="cancel"
                    sx={{
                      background: "orange",
                      "&:hover": { background: "red" },
                      marginTop: "20px",
                    }}
                  >
                    CANCEL
                  </Button>
                  <Button
                    value={order._id}
                    className="payment"
                    onClick={processOrderHandler}
                    sx={{
                      background: "orange",
                      "&:hover": { background: "green" },
                      marginTop: "20px",
                    }}
                  >
                    PAYMENT
                  </Button>
                </Box>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  const renderProcessOrders = (orders: Order[]) => {
    return (
      <div>
        <h2>Orders</h2>
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <h3>Order ID: {order._id}</h3>
            <p>Status: {order.orderStatus}</p>
            <p>Total: ${order.orderTotal}</p>
            <p>Delivery: ${order.orderDelivery}</p>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item) => {
                  const product = order.productData.find(
                    (p) => p._id === item.productId
                  );
                  return (
                    <tr key={item._id}>
                      <td className="product-cell">
                        <img
                          src={`${serverApi}/${product?.productImages[0]}`}
                          alt={product?.productName}
                          className="product-image"
                        />
                        <span>{product?.productName}</span>
                      </td>
                      <td>${item.itemPrice}</td>
                      <td>{item.itemQuantity}</td>
                      <td>${item.itemPrice * item.itemQuantity}</td>
                    </tr>
                  );
                })}
                <Box className="order-btn">
                  <p className="data">{moment().format("YY-MM-DD HH:mm")}</p>
                  <Button
                    value={order._id}
                    variant="contained"
                    className="payment"
                    onClick={finishedOrderHandler}
                    sx={{
                      background: "orange",
                      "&:hover": { background: "red" },
                      marginTop: "20px",
                    }}
                  >
                    Verify to Fulfil
                  </Button>
                </Box>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  const renderFinishOrders = (orders: Order[]) => {
    return (
      <div>
        <h2>Orders</h2>
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <h3>Order ID: {order._id}</h3>
            <p>Status: {order.orderStatus}</p>
            <p>Total: ${order.orderTotal}</p>
            <p>Delivery: ${order.orderDelivery}</p>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item) => {
                  const product = order.productData.find(
                    (p) => p._id === item.productId
                  );
                  return (
                    <tr key={item._id}>
                      <td className="product-cell">
                        <img
                          src={`${serverApi}/${product?.productImages[0]}`}
                          alt={product?.productName}
                          className="product-image"
                        />
                        <span>{product?.productName}</span>
                      </td>
                      <td>${item.itemPrice}</td>
                      <td>{item.itemQuantity}</td>
                      <td>${item.itemPrice * item.itemQuantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case "PausedOrders":
        return renderPausedOrders(pausedOrders);
      case "ProcessOrders":
        return renderProcessOrders(processOrders);
      case "FinishedOrders":
        return renderFinishOrders(finishedOrders);
      case "Profile":
        return (
          <div className="profile-section">
            <h2>Profile Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>Member Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={authMember?.memberNick}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div> */}
              </div>
              <div className="form-row">
                {/* <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={authMember.}
                    onChange={handleInputChange}
                  />
                </div> */}
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={authMember?.memberPhone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        );
      default:
        return <p>Please select an option from the menu.</p>;
    }
  };

  return (
    <Container>
      <div className="order-page">
        <div className="sidebar">
          <div className="menu-section">
            <h3>Orders</h3>
            <ul>
              <li onClick={() => setActiveSection("PausedOrders")}>
                Paused Orders
              </li>
              <li onClick={() => setActiveSection("ProcessOrders")}>
                Process Orders
              </li>
              <li onClick={() => setActiveSection("FinishedOrders")}>
                Finished Orders
              </li>
            </ul>
          </div>
          <div className="menu-section">
            <h3>Settings</h3>
            <ul>
              <li onClick={() => setActiveSection("Profile")}>Profile</li>
              <li onClick={() => setActiveSection("Address")}>Address</li>
              <li onClick={() => setActiveSection("Payment")}>Payment</li>
              <li onClick={() => handlerLogoutRequest()}>Log Out</li>
            </ul>
          </div>
        </div>
        <div className="order-details">{renderContent()}</div>
      </div>
    </Container>
  );
}
