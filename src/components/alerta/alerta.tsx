"use client";

import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

type AlertType = "success" | "error" | "warning" | "info";

type AlertProps = {
  type?: AlertType;
  message: string;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
  customIcon?: React.ReactNode;
  className?: string; //
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message,
  onClose,
  autoClose = true,
  duration = 4000,
  customIcon,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  const typeStyles = {
    success: {
      icon: customIcon || (
        <AiOutlineCheckCircle className="text-green-500" size={24} />
      ),
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    error: {
      icon: customIcon || (
        <AiOutlineInfoCircle className="text-red-500" size={24} />
      ),
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
    warning: {
      icon: customIcon || (
        <AiOutlineWarning className="text-yellow-500" size={24} />
      ),
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
    },
    info: {
      icon: customIcon || (
        <AiOutlineInfoCircle className="text-blue-500" size={24} />
      ),
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
    },
  };

  const { icon, bgColor, textColor, borderColor } =
    typeStyles[type] || typeStyles.info;

  if (!isVisible) return null;

  return (
    <div
      className={`mb-4 flex items-center rounded-lg border p-4 shadow-xl transition-all duration-500 ease-in-out ${bgColor} ${borderColor} ${textColor} ${className}`}
      role="alert"
    >
      <div className="mr-4">{icon}</div>

      <div className="flex-1">
        <span className="text-sm font-medium">{message}</span>
      </div>

      {onClose && (
        <button
          type="button"
          className="ml-4 text-gray-600 transition hover:text-gray-800"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          aria-label="Close"
        >
          <AiOutlineCloseCircle size={20} />
        </button>
      )}
    </div>
  );
};

export default Alert;
