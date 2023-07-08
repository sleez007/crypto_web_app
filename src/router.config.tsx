import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import About from "./features/about/about";
import Login from "./features/auth/login/login";
import Signup from "./features/auth/signup/signup";
import MainLayout from "./layout/main_layout";
import Dashboardlayout from "./layout/dashboard_layout";
import Dashboard from "./features/dashboard/dashboard";
import Product from "./features/products/products";
import { RootState } from "./store";
import { useAppSelector } from "./store/hook";
import Productdetail from "./features/products/detail/product_detail";


export function NotFoundPage () {
  return (
    <div>page was not found</div>
  )
}

const ProtectedRoute = ({children}: any) => {
  const isLoggedIn = useAppSelector((state: RootState) => state.global.isLoggedIn);
  return isLoggedIn ? children : <Navigate to='/' />
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
            <Route path="/dashboard"  element={<ProtectedRoute><Dashboardlayout /></ProtectedRoute>} >
              <Route index element={ <Dashboard />} />
              <Route path='product' element={ <Outlet/> } >
                <Route index element={ <Product />} />
                <Route path="detail/:id" element={ <Productdetail />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
)

export default RouteConfig;