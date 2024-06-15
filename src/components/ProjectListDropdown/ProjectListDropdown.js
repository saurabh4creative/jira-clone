import { Select } from "antd";
import React from "react";

const ProjectListDropdown = ({ projects, loading, error, isError, onChange, ...rest }) => {
     const handleChange = (selectedValue) => {
          if (onChange) {
               onChange(selectedValue);
          }
     };

     if (loading) {
          return <Select loading={loading} options={[]} />;
     }

     if (isError) {
          return error.message;
     } 

     return loading === false && projects ? (
          <Select
               options={
                    Array.isArray(projects)
                         ? projects.map((item) => {
                                return {
                                     value: item._id.toString(),
                                     label: item.name,
                                };
                           })
                         : []
               }
               placeholder={"Select Project"}
               onChange={handleChange}
               allowClear
               {...rest} 
          />
     ) : null;
};

export default ProjectListDropdown;