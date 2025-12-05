// components/ToastAlert.jsx
import { useEffect } from "react";

const ToastAlert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onClose === "function") {
        onClose(); // ✅ solo llama si es función
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Botón opcional para cerrar manualmente (mejora UX)
  const handleClose = () => {
    if (typeof onClose === "function") onClose();
  };

  return (
    <div
      role="alert"
      className="fixed inset-0 z-50 flex items-start justify-center pointer-events-none mt-8 mx-8"
    >
      <div
        className=" bg-blue-100 border-2 border-blue-300/50 text-blue-800/75 px-4 py-3 rounded-lg shadow-[4px_4px_0_0] pointer-events-auto cursor-pointer"
        onClick={handleClose}
      >
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="mt-0.5 size-4 flex-shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
              clipRule="evenodd"
            />
          </svg>
          <strong className="block flex-1 leading-tight font-semibold">
            {message}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ToastAlert;
