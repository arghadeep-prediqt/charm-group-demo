import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const MockPayment: React.FC = () => {
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "**** **** **** 4587",
    expiryDate: "06/28",
    cvv: "248",
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsProcessing(true);
    setPaymentStatus("Processing payment...");

    // Simulate payment processing
    const success = Math.random() > 0.2; // 80% chance of success

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus(
        success
          ? "Payment successful!"
          : "Payment failed. Bank Server is not responding."
      );
    }, 2000);

    await delay(4000); // 4sec

    if (success) {
      router.back();
    }
  };

  return (
    <NavContainer>
      <div className="h-screen inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">
              CHARM Payment
            </h2>
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label className="block text-gray-700">Card Number:</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  disabled={isProcessing}
                  className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Expiry Date:</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  disabled={isProcessing}
                  className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">CVV:</label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  disabled={isProcessing}
                  className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-2 text-p1-b border border-amber-300 text-amber-600 rounded-lg ${
                  isProcessing
                    ? "bg-amber-100"
                    : "bg-amber-50 hover:bg-amber-100"
                }`}
              >
                {isProcessing ? "Processing..." : "Pay Now"}
              </button>
            </form>
            {paymentStatus && (
              <p className="mt-4 text-center text-gray-700">{paymentStatus}</p>
            )}
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default MockPayment;
