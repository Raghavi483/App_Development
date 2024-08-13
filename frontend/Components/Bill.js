import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import '../Assets/CSS/Bill.css';

const Bill = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const billRef = useRef();
    const paymentData = location.state?.paymentData;

    console.log('Payment Data:', paymentData); // Debugging line

    if (!paymentData) {
        navigate('/home');
        return null;
    }

    const handlePrint = () => {
        const doc = new jsPDF();

        // Adding the content from the bill to the PDF
        doc.text(`Payment Receipt`, 20, 20);
        doc.text(`Card Number: ${paymentData.cardNumber}`, 20, 30);
        doc.text(`Name on Card: ${paymentData.cardName}`, 20, 40);
        doc.text(`Expiry Date: ${paymentData.expiryDate}`, 20, 50);
        doc.text(`Advance Amount Paid: ₹${paymentData.advanceAmount}`, 20, 60);

        // Save the PDF
        doc.save('payment-receipt.pdf');
    };

    const handleClose = () => {
        navigate('/home');
    };

    return (
        <div className="bill-container">
            <div className="bill" ref={billRef}>
                <h2>Payment Receipt</h2>
                <div className="bill-details">
                    <p><strong>Card Number:</strong> {paymentData.cardNumber}</p>
                    <p><strong>Name on Card:</strong> {paymentData.cardName}</p>
                    <p><strong>Expiry Date:</strong> {paymentData.expiryDate}</p>
                    <p><strong>Advance Amount Paid:</strong> ₹{paymentData.advanceAmount}</p>
                </div>
                <div className="bill-actions">
                    <button onClick={handlePrint}>Print</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Bill;
