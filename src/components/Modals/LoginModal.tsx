import { useState } from "react";

import Modal from "../Modal";
import Input from "../Input";

import useLoginModal from "@/Hooks/useLoginModal";
import useRegisterModal from "@/Hooks/useRegisterModal";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const onToggle = () => {
    if (loading) return;

    loginModal.onClose();
    registerModal.onOpen();
  };

  const handleSubmit = async () => {
    try {
      setLoading(!loading);

      // To do login
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(!loading);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Input
        label="Password"
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
    </div>
  );

  const footerContent = (
    <div className="mt-4 text-white text-center text-sm">
      <p>
        First time using Twitter? {""}
        <span className="underline cursor-pointer" onClick={onToggle}>
          Sign Up
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Welcome back!"
      actionLabel="Login In"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
      disabled={loading}
      handleSubmit={() => handleSubmit()}
    />
  );
};

export default LoginModal;
