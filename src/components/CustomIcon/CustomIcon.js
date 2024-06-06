import Icon from "@ant-design/icons";

const CustomIcon = ({ icon, size, color }) => {
     const style = {};
     if (size) style.fontSize = size;
     if (color) style.color = color;

     return <Icon component={icon} style={style} />
};

export default CustomIcon;