const TableHeaderIcon = ({ icon, title }) => {
     return (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
               {icon} {title}
          </div>
     );
};

export default TableHeaderIcon;