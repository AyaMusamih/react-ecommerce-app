import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}