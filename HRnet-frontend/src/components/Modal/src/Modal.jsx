import PropTypes from "prop-types";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  children,
  containerClassName = "",
  containerStyle = {},
  modalClassName = "",
  modalStyle = {},
  contentClassName = "",
  contentStyle = {},
  closeButtonClassName = "",
  closeButtonStyle = {},
}) {
  return (
    <div
      className={`modal-container ${
        isOpen ? "show" : ""
      } ${containerClassName}`}
      style={{ ...containerStyle }}
      role="dialog"
      aria-modal="true"
      aria-label="Confirmation de création d'un nouvel employé"
    >
      <div
        className={`modal ${isOpen ? "show" : ""} ${modalClassName}`}
        style={modalStyle}
      >
        <div
          className={`modal-content ${contentClassName}`}
          style={contentStyle}
        >
          {children}
        </div>
        <div className="close-button-container">
          <button
            className={`close-button ${closeButtonClassName}`}
            style={closeButtonStyle}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24"
              height="24"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.object,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  closeButtonClassName: PropTypes.string,
  closeButtonStyle: PropTypes.object,
};
