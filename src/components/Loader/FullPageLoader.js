import SpinLoader from "@components/SpinLoader/SpinLoader";

const FullPageLoader = () => {
     return (
          <div
               style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
               }}
          >
               <SpinLoader />
          </div>
     );
};

export default FullPageLoader;