import React, { useState } from 'react';

function Payment({ sum }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [paymentConfirmation, setPaymentConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setPaymentConfirmation(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white text-black shadow-md rounded-lg relative">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Shipping Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-600">
            Expiration Date:
          </label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
      {paymentConfirmation && (
        <div className="fixed bg-black p-8 w-3/4 h-96 rounded-lg flex flex-col justify-between text-white" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <h1 className="font-bold text-lg sm:text-xl">Total amount: ${sum}</h1>
          <div>
            <h1 className="m-4">Confirm?</h1>
            <div className="flex justify-between">
              <h1 className="bg-red-500 px-5 py-2 rounded-lg cursor-pointer" onClick={() => setPaymentConfirmation(!paymentConfirmation)}>
                Cancel
              </h1>
              <h1 className="bg-green-500 px-5 py-2 rounded-lg cursor-pointer" onClick={() => setPaymentConfirmation(!paymentConfirmation)}>
                Pay
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
