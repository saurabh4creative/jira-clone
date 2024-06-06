import MainRoutes from "@routes/MainRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./App.css";  

function App() {
     const queryClient = new QueryClient();

     return (
          <QueryClientProvider client={queryClient}>
               <MainRoutes /> 
               <ReactQueryDevtools initialIsOpen={false} /> 
          </QueryClientProvider>
     );
}

export default App;