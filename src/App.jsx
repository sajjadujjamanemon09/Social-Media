import { Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";


function App() {

  return (
    <div className="font-exo">
    <MainLayout>
      <Outlet></Outlet>
    </MainLayout>
    </div>
  )
}

export default App;
