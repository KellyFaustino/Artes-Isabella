import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const Alert = ({
  type = "info",
  message,
  onClose,
  autoClose = true,
  duration = 4000,
  customIcon,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
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
      className={`mb-4 flex items-center rounded-lg border p-4 ${bgColor} ${borderColor} ${textColor} shadow-xl transition-all duration-500 ease-in-out`}
      role="alert"
    >
      <div className="mr-4">{icon}</div>

      <div className="flex-1">
        <span className="text-sm font-medium">{message}</span>
      </div>

      {onClose && (
        <button
          type="button"
          className="ml-4 text-gray-600 transition-transform duration-300 hover:text-gray-800 focus:outline-none"
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          <AiOutlineCloseCircle size={20} />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  autoClose: PropTypes.bool,
  duration: PropTypes.number,
  customIcon: PropTypes.node,
};

export default Alert;
