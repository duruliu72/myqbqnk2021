import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Topbar from "../components/common/Topbar";
import LeftSideBar from "../components/common/LeftSideBar"
import RightSideBar from "../components/common/RightSideBar"
import Breadcumb from "../components/common/Breadcumb"
import Overview from "../components/Overview";
import Chart from "../components/Chart";
import ICT from "../components/ICT";
import Footer from "../components/common/Footer";
const Home = (props) => {
    useEffect(() => {
        props.loaddata();

    }, []);
    console.log("Posts", props.posts);
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
                        <Breadcumb title="Welcome !" bcdata={["Moltran", "Home"]} />
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
const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loaddata: () =>
            dispatch({ type: "FETCH_POSTS", payload: {} }),
        edit: (item) =>
            dispatch({
                type: "EDIT_POST",
                payload: { id: 1, title: "UPDATE TITLE", body: "UPDATED BODY" },
            }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);