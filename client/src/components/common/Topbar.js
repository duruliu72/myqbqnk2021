import { Link } from "react-router-dom";
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <div className="text-center">
                    <Link to="/x" href="index-2.html" className="logo"><i className="md md-terrain"></i> <span>Moltran </span></Link>
                </div>
            </div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="list-inline menu-left mb-0">
                        <li className="float-left">
                            <a href="#" className="button-menu-mobile open-left">
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>
                        <li className="hide-phone float-left">
                            <form role="search" className="navbar-form">
                                <input type="text" placeholder="Type here for search..."
                                    className="form-control search-bar" />
                                <Link to="/x" href="#" className="btn btn-search"><i className="fa fa-search"></i></Link>
                            </form>
                        </li>
                    </ul>

                    <ul className="nav navbar-right float-right list-inline">
                        <li className="dropdown d-none d-sm-block">
                            <Link to="/x" href="#" data-target="#" className="dropdown-toggle waves-effect waves-light"
                                data-toggle="dropdown" aria-expanded="true">
                                <i className="md md-notifications"></i> <span
                                    className="badge badge-pill badge-xs badge-danger">3</span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-lg">
                                <li className="text-center notifi-title">Notification</li>
                                <li className="list-group">

                                    <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                        <div className="media">
                                            <div className="media-left pr-2">
                                                <em className="fa fa-user-plus fa-2x text-info"></em>
                                            </div>
                                            <div className="media-body clearfix">
                                                <div className="media-heading">New user registered</div>
                                                <p className="m-0">
                                                    <small>You have 10 unread messages</small>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                        <div className="media">
                                            <div className="media-left pr-2">
                                                <em className="fa fa-diamond fa-2x text-primary"></em>
                                            </div>
                                            <div className="media-body clearfix">
                                                <div className="media-heading">New settings</div>
                                                <p className="m-0">
                                                    <small>There are new settings available</small>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                        <div className="media">
                                            <div className="media-left pr-2">
                                                <em className="fa fa-bell-o fa-2x text-danger"></em>
                                            </div>
                                            <div className="media-body clearfix">
                                                <div className="media-heading">Updates</div>
                                                <p className="m-0">
                                                    <small>There are
                                                            <span className="text-primary">2</span> new updates
                                                            available</small>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                        <small>See all notifications</small>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="d-none d-sm-block">
                            <Link to="/x" href="#" id="btn-fullscreen" className="waves-effect waves-light"><i
                                className="md md-crop-free"></i></Link>
                        </li>
                        <li className="d-none d-sm-block">
                            <Link to="/x" href="#" className="right-bar-toggle waves-effect waves-light"><i className="md md-chat"></i></Link>
                        </li>
                        <li className="dropdown open">
                            <Link to="/x" href="#" className="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="true"><img
                                src="assets/images/users/avatar-1.jpg" alt="user-img" className="rounded-circle" /> </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                                    className="md md-face-unlock mr-2"></i> Profile</Link></li>
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                                    className="md md-settings mr-2"></i> Settings</Link></li>
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i className="md md-lock mr-2"></i>
                                            Lock screen</Link></li>
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                                    className="md md-settings-power mr-2"></i> Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;
<div className="topbar">
    <div className="topbar-left">
        <div className="text-center">
            <Link to="/x" href="index-2.html" className="logo"><i className="md md-terrain"></i> <span>Moltran </span></Link>
        </div>
    </div>
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="list-inline menu-left mb-0">
                <li className="float-left">
                    <a href="#" className="button-menu-mobile open-left">
                        <i className="fa fa-bars"></i>
                    </a>
                </li>
                <li className="hide-phone float-left">
                    <form role="search" className="navbar-form">
                        <input type="text" placeholder="Type here for search..."
                            className="form-control search-bar" />
                        <Link to="/x" href="#" className="btn btn-search"><i className="fa fa-search"></i></Link>
                    </form>
                </li>
            </ul>

            <ul className="nav navbar-right float-right list-inline">
                <li className="dropdown d-none d-sm-block">
                    <Link to="/x" href="#" data-target="#" className="dropdown-toggle waves-effect waves-light"
                        data-toggle="dropdown" aria-expanded="true">
                        <i className="md md-notifications"></i> <span
                            className="badge badge-pill badge-xs badge-danger">3</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-lg">
                        <li className="text-center notifi-title">Notification</li>
                        <li className="list-group">

                            <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                <div className="media">
                                    <div className="media-left pr-2">
                                        <em className="fa fa-user-plus fa-2x text-info"></em>
                                    </div>
                                    <div className="media-body clearfix">
                                        <div className="media-heading">New user registered</div>
                                        <p className="m-0">
                                            <small>You have 10 unread messages</small>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                <div className="media">
                                    <div className="media-left pr-2">
                                        <em className="fa fa-diamond fa-2x text-primary"></em>
                                    </div>
                                    <div className="media-body clearfix">
                                        <div className="media-heading">New settings</div>
                                        <p className="m-0">
                                            <small>There are new settings available</small>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                <div className="media">
                                    <div className="media-left pr-2">
                                        <em className="fa fa-bell-o fa-2x text-danger"></em>
                                    </div>
                                    <div className="media-body clearfix">
                                        <div className="media-heading">Updates</div>
                                        <p className="m-0">
                                            <small>There are
                                                            <span className="text-primary">2</span> new updates
                                                            available</small>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/x" href="javascript:void(0);" className="list-group-item">
                                <small>See all notifications</small>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="d-none d-sm-block">
                    <Link to="/x" href="#" id="btn-fullscreen" className="waves-effect waves-light"><i
                        className="md md-crop-free"></i></Link>
                </li>
                <li className="d-none d-sm-block">
                    <Link to="/x" href="#" className="right-bar-toggle waves-effect waves-light"><i className="md md-chat"></i></Link>
                </li>
                <li className="dropdown open">
                    <Link to="/x" href="#" className="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="true"><img
                        src="assets/images/users/avatar-1.jpg" alt="user-img" className="rounded-circle" /> </Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                            className="md md-face-unlock mr-2"></i> Profile</Link></li>
                        <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                            className="md md-settings mr-2"></i> Settings</Link></li>
                        <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i className="md md-lock mr-2"></i>
                                            Lock screen</Link></li>
                        <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                            className="md md-settings-power mr-2"></i> Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>