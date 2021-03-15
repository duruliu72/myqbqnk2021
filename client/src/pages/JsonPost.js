import React, { Component } from 'react';
import axios from "axios";
const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"
class JsonPost extends Component {
    state = {
        posts: []
    }
    async componentDidMount() {
        const { data: posts } = await axios.get(apiEndPoint);
        console.log(posts);
        this.setState({ posts });
    }
    handleAdd = async () => {
        const obj = {
            title: "a",
            body: "b"
        }
        const { data: post } = await axios.post(apiEndPoint, obj);
        const posts = [post, ...this.state.posts];
        this.setState({ posts });
        console.log("Add", post);
    }
    handleUpdate = async post => {
        post.title = "Updated";
        await axios.put(apiEndPoint + "/" + post.id, post);
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post }
        this.setState({ posts });
        console.log("Update", post);
    }
    handleDelete = async post => {
        const originalPost = this.state.posts;
        const posts = this.state.posts.filter(p => p.id != post.id);
        this.setState({ posts });
        try {
            await axios.delete(apiEndPoint + "/" + post.id);
            throw new Error("");
        } catch (ex) {
            this.setState({ posts: originalPost });
        }

        console.log("Del", post);
    }
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-sm-6">
                        <div className="m-b-30">
                            <button onClick={() => {
                                this.handleAdd();
                            }} id="addToTable" data-toggle="modal" data-target={"#con-close-modal_"} className="btn btn-success waves-effect waves-light">Add <i className="mdi mdi-plus-circle-outline"></i></button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Posts</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Title</th>
                                                        <th>Body</th>
                                                        <th>Username</th>
                                                        <th>Age</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {this.state.posts.map((post) => {
                                                        return <tr key={post.id}>
                                                            <td>{post.id}</td>
                                                            <td>{post.title}</td>
                                                            <td>{post.body}</td>
                                                            <td>@mdo</td>
                                                            <td>20</td>
                                                            <td><span onClick={() => {
                                                                this.handleUpdate(post);
                                                            }}>Update</span><span onClick={() => {
                                                                this.handleDelete(post)
                                                            }}>Del</span></td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JsonPost;
