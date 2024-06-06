import { Button, Form, Input, Select } from "antd";
import { getProjectList } from "@services/api/requests/projectApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createTask } from "@services/api/requests/taskApi";

const { Option } = Select;

const TaskDetail = () => {
     const [projectList, setProjectList] = useState([]);

     const {
          isLoading: projectLoading,
          isError: projectError,
          data: projectData,
     } = useQuery({
          queryKey: ["projects"],
          queryFn: getProjectList,
          retry: false,
     });

     useEffect(() => {
          if (projectLoading === false && !projectError) {
               const dataProject = projectData["projects"];
               const listOptions = dataProject.map((item) => {
                    return {
                         label: item.name,
                         value: item._id,
                    };
               });

               setProjectList(listOptions);
          }
     }, [projectLoading, projectError, projectData]);
 
     const submitForm = async (values) => {
          return await createTask(values);
     };

     const mutation = useMutation({
          mutationFn: submitForm,
     });

     const onFinish = (values) => mutation.mutate(values);

     console.log(mutation)

     return (
          <Form
               labelCol={{
                    span: 4,
               }}
               wrapperCol={{
                    span: 14,
               }}
               layout="horizontal"
               onFinish={onFinish}
          >
               <Form.Item
                    label="Project"
                    name="project"
                    rules={[
                         {
                              required: true,
                              message: "Please select a project!",
                         },
                    ]}
               >
                    <Select placeholder="Select a project" loading={projectLoading} options={projectList} />
               </Form.Item>

               <Form.Item
                    label="Issue Type"
                    name="type"
                    rules={[
                         {
                              required: true,
                              message: "Please select an issue type!",
                         },
                    ]}
               >
                    <Select placeholder="Select an issue type">
                         <Option value="Bug">Bug</Option>
                         <Option value="Feature">Feature</Option>
                         <Option value="Task">Task</Option>
                         <Option value="Story">Story</Option>
                    </Select>
               </Form.Item>

               <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                         {
                              required: true,
                              message: "Please select a status!",
                         },
                    ]}
               >
                    <Select placeholder="Select a status">
                         <Option value="Open">Open</Option>
                         <Option value="In Progress">In Progress</Option>
                         <Option value="Resolved">Resolved</Option>
                         <Option value="To Do">To Do</Option>
                    </Select>
               </Form.Item>

               <Form.Item
                    label="Summary"
                    name="summary"
                    rules={[
                         {
                              required: true,
                              message: "Please input a summary!",
                         },
                    ]}
               >
                    <Input placeholder="Summary" />
               </Form.Item>

               <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                         {
                              required: true,
                              message: "Please input a description!",
                         },
                    ]}
               >
                    <Input.TextArea placeholder="Description" />
               </Form.Item>

               <Form.Item
                    label="Assignee"
                    name="assignee"
                    rules={[
                         {
                              required: true,
                              message: "Please input an assignee!",
                         },
                    ]}
               >
                    <Input placeholder="Assignee" />
               </Form.Item>

               <Form.Item
                    label="Reporter"
                    name="reporter"
                    rules={[
                         {
                              required: true,
                              message: "Please input a reporter!",
                         },
                    ]}
               >
                    <Input placeholder="Reporter" />
               </Form.Item>

               <Form.Item label="Priority" name="priority">
                    <Select placeholder="Select an issue type">
                         <Option value="High">High</Option>
                         <Option value="Medium">Medium</Option>
                         <Option value="Low">Low</Option>
                         <Option value="Critical">Critical</Option>
                    </Select>
               </Form.Item>

               <Form.Item label="Sprint" name="sprint">
                    <Input placeholder="Reporter" />
               </Form.Item>

               <Form.Item label="Original Estimate" name="original_estimate">
                    <Input placeholder="Reporter" />
               </Form.Item>

               <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                    <Button type="primary" htmlType="submit">
                         Submit
                    </Button>
               </Form.Item>
          </Form>
     );
};

export default TaskDetail;
