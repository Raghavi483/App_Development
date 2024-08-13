import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Payment = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        eventType: "",
        amount: 0
    });

    const eventPrices = {
        'Corporate Event': 50000,
        'Wedding': 300000,
        'Birthday Party': 3000,
        'Christmas Event': 4000,
        'Diwali Celebration': 3000,
        'Food Fest': 10000,
        'Concert': 60000,
        'Exhibition': 40000,
        'Fashion Show': 100000,
        'Product Launch': 20000,
        'Tech Conference': 7000,
        'Charity Gala': 200000
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            amount: name === "eventType" ? eventPrices[value] : formData.amount
        });
    };

    const handlePayment = async () => {
        const { name, phoneNumber, email, eventType, amount } = formData;

        if (name && phoneNumber && email && eventType) {
            const options = {
                key: "rzp_test_KsgsqXVQpswuyo", // Replace with your Razorpay key ID
                amount: amount * 100, // Amount in paise
                currency: "INR",
                name: "Your Company Name",
                description: "Event Booking",
                handler: async function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    
                    const paymentData = {
                        name: name,
                        phoneNumber: phoneNumber,
                        email: email,
                        eventType: eventType,
                        paymentId: response.razorpay_payment_id,
                        amount: amount
                    };

                    try {
                        await axios.post('http://localhost:8080/payments/process', paymentData);
                        alert('Payment details saved successfully!');
                    } catch (error) {
                        console.error('Failed to save payment details:', error);
                        alert('Failed to save payment details. Please try again.');
                    }
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phoneNumber
                },
                notes: {
                    eventType: eventType
                },
                theme: {
                    color: "#F37254"
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div><Navbar/><br/><br/>
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Event Payment</h2>
            <form>
                <div style={{ marginBottom: "15px" }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Event Type:</label>
                    <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", margin: "5px 0" }}
                    >
                        <option value="">Select an event</option>
                        {Object.keys(eventPrices).map((event, index) => (
                            <option key={index} value={event}>
                                {event}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Amount:</label>
                    <input
                        type="text"
                        name="amount"
                        value={formData.amount}
                        readOnly
                        style={{ width: "100%", padding: "8px", margin: "5px 0", backgroundColor: "#f1f1f1" }}
                    />
                </div>
                <button
                    type="button"
                    onClick={handlePayment}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#F37254",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Pay Now
                </button>
            </form>
        </div>
        </div>
    );
};

export default Payment;
