import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Topbar from "../components/common/Topbar";
import LeftSideBar from "../components/common/LeftSideBar"
import RightSideBar from "../components/common/RightSideBar"
import Breadcumb from "../components/common/Breadcumb"
import Footer from "../components/common/Footer";
const User = (props) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => props.getUserList(json))
            .catch(ex => {
                console.log(ex);
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
                        <Breadcumb title="Users" bcdata={["Path1", "Path2", "Path3"]} />
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="m-b-30">
                                            <button onClick={() => {
                                                console.log();
                                                props.addUser();
                                            }} id="addToTable" className="btn btn-success waves-effect waves-light">Add <i className="mdi mdi-plus-circle-outline"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-striped add-edit-table dt-responsive nowrap" id="datatable-editable" style={{ borderCollapse: "collapse", borderSpacing: "0", width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.users.map((item) => {
                                            return (
                                                <tr className="gradeU">
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td className="actions">
                                                        <a href="#" className="on-default edit-row" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
                                                        <a href="#" className="on-default remove-row" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
                                                        <a href="#" className="hidden on-editing save-row" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save"><i className="fa fa-save"></i></a>
                                                        <a href="#" className="hidden on-editing cancel-row" data-toggle="tooltip" data-placement="top" title="" data-original-title="Cancel"><i className="fa fa-times"></i></a>
                                                    </td>
                                                </tr>
                                            );
                                        })}

                                    </tbody>
                                </table>

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
const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.userState.users,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUserList: (data) => dispatch({
            type: 'USER_LIST_SUCCESS',
            payload: data
        }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);