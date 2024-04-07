import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, [navigate]);
  return children;
}
