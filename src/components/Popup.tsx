"use client";
import { useEffect } from "react";

interface PopupProps {
  message: string;
  onClose: () => void;
}

export default function Popup({ message, onClose }: PopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50 animate-slideIn">
      <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-medium">
        {message}
      </div>
    </div>
  );
}
