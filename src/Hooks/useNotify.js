// import toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

export const useNotify = (msg, id, type, time) => {
  return toast[type](msg, {
    toastId: id,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: time ? time : 2000
  });
};
