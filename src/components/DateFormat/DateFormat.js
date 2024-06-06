import React from "react";
import moment from "moment";

const DateFormat = ({ text }) => {
     return moment.utc(text, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ll");
};

export default React.memo(DateFormat);