import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


export default function MainLayout(props: PropsWithChildren){
    return (
       <>
            <Navbar />
            <Outlet />
            <Footer />
       </>
       
       
    )
}