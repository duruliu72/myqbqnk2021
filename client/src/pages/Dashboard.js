import React from 'react';
import { Link } from "react-router-dom";
import Topbar from "../components/common/Topbar";
import LeftSideBar from "../components/common/LeftSideBar"
import RightSideBar from "../components/common/RightSideBar"
import Overview from "../components/Overview";
import Chart from "../components/Chart";
import ICT from "../components/ICT";
import Footer from "../components/common/Footer";
const Dashboard = () => {
    return (
        <>
            {/* Topbar  */}
            <Topbar />
            {/* /Topbar  */}

            {/* Left Sidebar Star */}
            <LeftSideBar />
            {/* /Left Sidebar Star */}

            <div className="content-page">

                <div className="content">
                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="pull-left page-title">Welcome !</h4>
                                <ol className="breadcrumb pull-right">
                                    <li><Link to="/x" href="#">Moltran</Link></li>
                                    <li className="active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                        <Overview />
                        <Chart />
                        <ICT />
                    </div>

                </div>

                {/* Footer  */}
                <Footer />
            </div>
            {/* Right Sidebar  */}
            <RightSideBar />
            {/* /Right Sidebar  */}
        </>
    );
}

export default Dashboard;