import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from "react-router-dom";
import Topbar from "../components/common/Topbar";
import LeftSideBar from "../components/common/LeftSideBar"
import RightSideBar from "../components/common/RightSideBar"
import Breadcumb from "../components/common/Breadcumb"
import Footer from "../components/common/Footer";
import { getGenres } from "../store/genreReducer";
const Genre = (props) => {
    const [genre, setGenre] = useState({
        name: "",
        _id: ""
    });
    const [actionMode, setActionMode] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_GENRE" });
        setActionMode("Save");
    }, []);
    const genres = useSelector(state => getGenres(state));
    const editGenre = (genre) => {
        setGenre(genre);
        setActionMode("Edit");
    }
    const onSubmit = (e) => {
        if (actionMode === "Save") {
            dispatch({ type: "ADD_GENRE", payload: { name: genre.name } });
        } else {
            dispatch({ type: "EDIT_GENRE", payload: genre });
        }
        e.preventDefault();
    }
    const del = (genre) => {
        let isYes = window.confirm("Are you want to delete");
        if (isYes) {
            dispatch({ type: "REMOVE_POST", payload: genre });
        }
    }
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
                                                setGenre({ _id: "", name: "" });
                                                setActionMode("Save");
                                            }} id="addToTable" data-toggle="modal" data-target={"#con-close-modal_"} className="btn btn-success waves-effect waves-light">Add <i className="mdi mdi-plus-circle-outline"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {genres.map((genre) => {
                                        return (
                                            <div key={genre._id} className="col-md-12">
                                                <div>
                                                    <h2>{genre.name}
                                                        <button onClick={(e) => {
                                                            del(genre);
                                                        }} style={{ float: "right", marginLeft: "20px" }} className="btn btn-success waves-effect waves-light">Del <i className="mdi mdi-plus-circle-outline"></i></button>
                                                        <button style={{ float: "right" }} onClick={() => {
                                                            editGenre(genre);
                                                        }} id="addToTable" data-toggle="modal" data-target={"#con-close-modal_" + genre._id} className="btn btn-success waves-effect waves-light">Edit <i className="mdi mdi-plus-circle-outline"></i></button></h2>
                                                    <hr />
                                                </div>
                                            </div>);
                                    })}
                                </div>
                                <div className="row">
                                    <div id={"con-close-modal_" + genre._id} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title mt-0">New Genre</h4>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <form onSubmit={(e) => {
                                                    {
                                                        onSubmit(e);
                                                    }

                                                }}>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="field-1" className="control-label">Name</label>
                                                                    <input name="name" value={genre.name} onChange={(e) => {
                                                                        setGenre({ ...genre, name: e.target.value })
                                                                    }} type="text" className="form-control" id="field-1" placeholder="John" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="field-2" className="control-label">Surname</label>
                                                                    <input type="text" className="form-control" id="field-2" placeholder="Doe" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="field-3" className="control-label">Address</label>
                                                                    <input type="text" className="form-control" id="field-3" placeholder="Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="field-4" className="control-label">City</label>
                                                                    <input type="text" className="form-control" id="field-4" placeholder="Boston" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="field-5" className="control-label">Country</label>
                                                                    <input type="text" className="form-control" id="field-5" placeholder="United States" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="field-6" className="control-label">Zip</label>
                                                                    <input type="text" className="form-control" id="field-6" placeholder="123456" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group no-margin">
                                                                    <label htmlFor="field-7" className="control-label">Personal Info</label>
                                                                    <textarea className="form-control autogrow" id="field-7" placeholder="Write something about yourself" style={{ overflow: "hidden", wordWrap: "break-word", resize: "horizontal", height: "104px" }}></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                                        <button type="submit" className="btn btn-info waves-effect waves-light">Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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