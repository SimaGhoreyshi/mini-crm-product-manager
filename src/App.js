import { ToastContainer } from "react-toastify";
import { MainLayout } from "./components";
import { Router } from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <MainLayout>
        <Router />
      </MainLayout>
    </>
  );
}

export default App;
