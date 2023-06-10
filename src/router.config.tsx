import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import About from "./features/about/about";
import Login from "./features/auth/login/login";
import Signup from "./features/auth/signup/signup";
import MainLayout from "./layout/main_layout";
import Dashboardlayout from "./layout/dashboard_layout";
import Dashboard from "./features/dashboard/dashboard";


export function NotFoundPage () {
  return (
    <div>page was not found</div>
  )
}


const RouteConfig = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={ <Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/dashboard" element={<Dashboardlayout />} >
              <Route index element={ <Dashboard />} />
            </Route>
            <Route  path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
)

export default RouteConfig;