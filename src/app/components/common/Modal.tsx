import React, { useState } from "react";

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  return (
    <>
      {/* Buttons to open modals */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={() => setSignInOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Open Sign In
        </button>
        <button
          onClick={() => setSignUpOpen(true)}
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Open Sign Up
        </button>
      </div>

      {/* Sign In Modal */}
      <Modal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)}>
        <SignIn />
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)}>
        <SignUp />
      </Modal>
    </>
  );
};

// SignIn Component
const SignIn: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

// SignUp Component
const SignUp: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter your last name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Create a password"
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;
