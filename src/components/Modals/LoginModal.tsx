import { useState } from "react";

import Modal from "../Modal";
import Input from "../Input";

import useModal from "@/Hooks/useModal";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginModal = useModal();

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

  return (
    <Modal
      isOpen={true}
      actionLabel="Sign In"
      body={bodyContent}
      disabled={loading}
      handleSubmit={() => {}}
      title="Log In"
    />
  );
};

export default LoginModal;
