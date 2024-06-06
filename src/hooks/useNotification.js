import { message } from "antd";

const useNotification = () => {
     const showMessage = (content, duration = 2) => {
          message.info(content, duration);
     };

     const showSuccessMessage = (content, duration = 2) => {
          message.success(content, duration);
     };

     const showErrorMessage = (content, duration = 2) => {
          message.error(content, duration);
     };

     return { showMessage, showSuccessMessage, showErrorMessage };
};

export default useNotification;