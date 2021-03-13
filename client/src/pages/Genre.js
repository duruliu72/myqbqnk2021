import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from "react-router-dom";
import Topbar from "../components/common/Topbar";
import LeftSideBar from "../components/common/LeftSideBar"
import RightSideBar from "../components/common/RightSideBar"
import Breadcumb from "../components/common/Breadcumb"
import Footer from "../components/common/Footer";
const Genre = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch((dispatch, getState) => {
            fetch('http://localhost:3005/api/genres')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                })
                .catch(ex => {
                    console.log(ex);
                });
        });

    }, []);
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
                        <Breadcumb title="Genre" bcdata={["Path1", "Path2", "Path3"]} />
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="m-b-30">
                                            <button onClick={() => {

                                            }} id="addToTable" className="btn btn-success waves-effect waves-light">Add <i className="mdi mdi-plus-circle-outline"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    {/* {props.posts.map((post) => {
                                        return (<div className="col-md-12">
                                            <div>
                                                <h2>{post.title}</h2>
                                                <p>{post.body}</p>
                                                <hr />
                                            </div>
                                        </div>);
                                    })} */}
                                </div>
                            </div>
                        </div>

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

export default Genre;