import { useQuery } from "@tanstack/react-query";
import { getTasksList } from "@services/api/requests/taskApi";
import TaskTable from "./View/TaskTable";

const Tasks = () => {
     const query = useQuery({
          queryKey: ["tasks"],
          queryFn: getTasksList,
          retry: false,
     });

     const { isLoading, error, data, isError } = query;

     if (isLoading) {
          return <div>Loading...</div>;
     }

     if (isError) {
          return <div>Error: {error.message}</div>;
     }

     return <TaskTable dataSource={data['tasks']} />;
};

export default Tasks;