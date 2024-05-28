import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ isVisible, title, description, src, onClose }) => {
  const modalStyle = {
    img: {
      width: "100%",
    },
    modalBackground: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalContainer: {
      width: "30rem",
      borderRadius: "0.5rem",
      backgroundColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.35) 0rem 0.31rem 0.93rem",
      display: "flex",
      flexDirection: "row",
      position: "relative",
    },
    rightPart: {
      width: "100%",
    },
    titleRightPart: {
      textAlign: "center",
      fontSize: "0.5rem",
      padding: "0rem 1.56rem",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleEmployeeCreated: {
      color: "red",
      display: "flex",
      justifyContent: "center",
    },
    descriptionModal: {
      padding: "25px",
    },
    button: {
      backgroundColor: "white",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      borderRadius: "100%",
      fontSize: "0.93rem",
      width: "1.87rem",
      height: "1.87rem",
      top: "-1.09rem",
      right: "-1.09rem",
      position: "absolute",
      border: "solid red 2px",
      boxShadow: "0px 0px 10px 0px rgba(247, 247, 247, 0.75)",
    },
    modalOpen: {
      overflow: "hidden",
    },
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={modalStyle.modalBackground}>
      <div style={modalStyle.modalContainer}>
        <div style={modalStyle.rightPart}>
          <div style={modalStyle.titleRightPart}>
            <h1 style={modalStyle.titleEmployeeCreated}>{title}</h1>
            <button style={modalStyle.button} onClick={onClose}>
              <img style={modalStyle.img} src={src} alt="Close Modal" />
            </button>
          </div>
          <div style={modalStyle.descriptionModal}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Modal;
