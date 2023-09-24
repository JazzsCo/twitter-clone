import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast/headless";

import Modal from "../Modal";
import Input from "../Input";

import useLoginModal from "@/Hooks/useLoginModal";
import useRegisterModal from "@/Hooks/useRegisterModal";

const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const onToggle = () => {
    if (loading) return;

    registerModal.onClose();
    loginModal.onOpen();
  };

  const handleSubmit = async () => {
    try {
      setLoading(!loading);

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      toast.success("Create account.");

      signIn("credentials", { email, password });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(!loading);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        label="Username"
        placeholder="Username"
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
      />
      <Input
        label="Name"
        placeholder="Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
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
        Already have an account! {""}
        <span className="underline cursor-pointer" onClick={onToggle}>
          Login In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Create an account."
      actionLabel="Sign Up"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
      disabled={loading}
      handleSubmit={() => handleSubmit()}
    />
  );
};

export default RegisterModal;
