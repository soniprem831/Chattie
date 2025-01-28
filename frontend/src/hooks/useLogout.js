import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
    //   console.log("Starting logout...");
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        console.error("Logout error from API:", data.error); // Log the actual error from API
        throw new Error(data.error);
      }

    //   console.log("Starting logout after...");
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    //   console.log("AuthUser after logout:", null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
