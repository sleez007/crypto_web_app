import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DownloadBanner  from "../components/download_banner";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";


export default function MainLayout(props: PropsWithChildren){
    return (
       <>
            <Banner />
            <DownloadBanner />
            <Navbar />
            <Outlet />
            <Footer />
       </>
    )
}