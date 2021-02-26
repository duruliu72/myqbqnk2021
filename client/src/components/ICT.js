import { Link } from "react-router-dom";
const ICT = () => {
    return (<div className="row">

        <div className="col-xl-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Inbox</h3>
                </div>
                <div className="card-body">
                    <div className="inbox-widget nicescroll mx-box">
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-1.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Chadengle</p>
                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                <p className="inbox-item-date">13:40 PM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Tomaslau</p>
                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                <p className="inbox-item-date">13:34 PM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-3.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Stillnotdavid</p>
                                <p className="inbox-item-text">This theme is awesome!</p>
                                <p className="inbox-item-date">13:17 PM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Kurafire</p>
                                <p className="inbox-item-text">Nice to meet you</p>
                                <p className="inbox-item-date">12:20 PM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Shahedk</p>
                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                <p className="inbox-item-date">10:15 AM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-6.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Adhamdannaway</p>
                                <p className="inbox-item-text">This theme is awesome!</p>
                                <p className="inbox-item-date">9:56 AM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-8.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Arashasghari</p>
                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                <p className="inbox-item-date">10:15 AM</p>
                            </div>
                        </Link>
                        <Link to="/x" href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="assets/images/users/avatar-9.jpg"
                                    className="rounded-circle" alt="" /></div>
                                <p className="inbox-item-author">Joshaustin</p>
                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                <p className="inbox-item-date">9:56 AM</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-xl-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Chat</h3>
                </div>
                <div className="card-body">
                    <div className="chat-conversation">
                        <ul className="conversation-list nicescroll">
                            <li className="clearfix">
                                <div className="chat-avatar">
                                    <img src="assets/images/avatar-1.jpg" alt="male" />
                                    <i>10:00</i>
                                </div>
                                <div className="conversation-text">
                                    <div className="ctext-wrap">
                                        <i>John Deo</i>
                                        <p>
                                            Hello!
                                    </p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix odd">
                                <div className="chat-avatar">
                                    <img src="assets/images/users/avatar-5.jpg" alt="Female" />
                                    <i>10:01</i>
                                </div>
                                <div className="conversation-text">
                                    <div className="ctext-wrap">
                                        <i>Smith</i>
                                        <p>
                                            Hi, How are you? What about our next meeting?
                                    </p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix">
                                <div className="chat-avatar">
                                    <img src="assets/images/avatar-1.jpg" alt="male" />
                                    <i>10:01</i>
                                </div>
                                <div className="conversation-text">
                                    <div className="ctext-wrap">
                                        <i>John Deo</i>
                                        <p>
                                            Yeah everything is fine
                                    </p>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix odd">
                                <div className="chat-avatar">
                                    <img src="assets/images/users/avatar-5.jpg" alt="male" />
                                    <i>10:02</i>
                                </div>
                                <div className="conversation-text">
                                    <div className="ctext-wrap">
                                        <i>Smith</i>
                                        <p>
                                            Wow that's great
                                    </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="col-sm-9 chat-inputbar">
                                <input type="text" className="form-control chat-input"
                                    placeholder="Enter your text" />
                            </div>
                            <div className="col-sm-3 chat-send">
                                <button type="submit"
                                    className="btn btn-info btn-block waves-effect waves-light">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-xl-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="m-0 card-title">Todo</h3>
                </div>
                <div className="card-body todoapp">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4 id="todo-message"><span id="todo-remaining"></span> of <span
                                id="todo-total"></span> remaining</h4>
                        </div>
                        <div className="col-sm-6">
                            <Link to="/x" href="#"
                                className="pull-right btn btn-primary btn-sm waves-effect waves-light"
                                id="btn-archive">Archive</Link>
                        </div>
                    </div>

                    <ul className="list-group no-margn nicescroll todo-list" style={{ maxHeight: "288px" }}
                        id="todo-list"></ul>

                    <form name="todo-form" id="todo-form" className="m-t-20">
                        <div className="row">
                            <div className="col-sm-9 todo-inputbar">
                                <input type="text" id="todo-input-text" name="todo-input-text"
                                    className="form-control" placeholder="Add new todo" />
                            </div>
                            <div className="col-sm-3 todo-send">
                                <button className="btn-primary btn-block btn waves-effect waves-light"
                                    type="button" id="todo-btn-submit">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default ICT;