import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  return reactDom.createPortal(children);
};

export default ModalPortal;
