import moment from "moment";

const DateValue = ({ date }) => {
     return date ? moment.utc(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ll") : null;
};

export default DateValue;