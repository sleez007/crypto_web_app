import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function MainLayout(props: PropsWithChildren){
    return (
       <>
            <Navbar />
            {props.children}
            <Footer />
       </>
       
       
    )
}