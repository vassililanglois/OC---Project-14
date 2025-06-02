import { useEffect, useState } from "react";

export default function Modal({ content }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={`modal-container ${visible ? "show" : ""}`}>
      <div className={`modal ${visible ? "show" : ""}`}>
        <div className="modal-content">{content}</div>
        <div className="close-button-container">
          <button className="close-button" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
