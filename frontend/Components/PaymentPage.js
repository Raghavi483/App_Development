import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Assets/CSS/PaymentPage.css';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    advanceAmount: '', // Initially, leave this empty
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (paymentData.advanceAmount < 10000) {
      window.alert("Advance amount should not be less than ₹10,000.");
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:8080/pay/payment', paymentData);
      console.log(response.data);
      window.alert("Payment Successful!");

      // Navigate to Bill component after payment
      navigate('/Bill', { state: { paymentData } });

    } catch (error) {
      console.error("There was an error processing the payment!", error);
      window.alert("Payment failed. Please try again.");
    }
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
          <input
            type="number"
            name="advanceAmount"
            placeholder="Advance Amount (Min Rs.25000)"
            value={paymentData.advanceAmount || ''} // This will show the placeholder until the user types something
            onChange={handleChange}
            required
            min="25000"
          />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
