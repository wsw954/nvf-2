import React from "react";

const Popup = ({ message, confirmAction, cancelAction }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <p>{message}</p>
        <div className="popup-actions">
          <button onClick={confirmAction}>Yes</button>
          <button onClick={cancelAction}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
