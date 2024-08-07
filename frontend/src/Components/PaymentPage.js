// PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/PaymentPage.css';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Process payment logic here
    console.log(paymentData);
    window.alert("Payment Successful!");
    navigate('/'); // Redirect to home page or a confirmation page
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Payment Details</h2>
        <form className="payment-form" onSubmit={handlePayment}>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cardName"
            placeholder="Name on Card"
            value={paymentData.cardName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={paymentData.expiryDate}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentData.cvv}
            onChange={handleChange}
            required
          />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
